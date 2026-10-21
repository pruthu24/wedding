import { getSystemPrompt } from './systemPrompt.js';
import dotenv from 'dotenv';
dotenv.config();

export async function generateChatResponse(messages: any[], stream = false) {
    const provider = (process.env.AI_PROVIDER || 'openrouter').toLowerCase();

    let baseUrl = 'https://openrouter.ai/api/v1';
    let apiKey = process.env.OPENROUTER_API_KEY || '';
    let model = process.env.OPENROUTER_MODEL || 'openrouter/free';

    if (provider === 'lmstudio') {
        baseUrl = process.env.LM_STUDIO_BASE_URL || 'http://127.0.0.1:1234/v1';
        apiKey = process.env.LM_STUDIO_API_KEY || 'lm-studio';
        model = process.env.LM_STUDIO_MODEL || 'local-model';
    }

    if (provider === 'openrouter' && (!apiKey || apiKey === 'your_openrouter_api_key_here')) {
        throw new Error(
            'Missing OPENROUTER_API_KEY. Please obtain a free key from https://openrouter.ai/keys and set OPENROUTER_API_KEY in your .env file.'
        );
    }

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    if (baseUrl.includes('openrouter.ai')) {
        const defaultSiteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:5173';
        headers['HTTP-Referer'] = process.env.SITE_URL || defaultSiteUrl;
        headers['X-Title'] = 'Prithvi & Varshini Wedding AI Concierge';
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            model: model,
            messages: [{ role: 'system', content: getSystemPrompt() }, ...messages],
            temperature: 0.7,
            max_tokens: 400,
            stream: stream
        })
    });

    if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        console.error(`AI Provider (${provider}) Error [Status ${response.status}]:`, errorText);
        throw new Error(`AI Provider Error (${response.status}): ${response.statusText} - ${errorText}`);
    }

    if (stream) {
        return response; // Web Response body is a ReadableStream
    } else {
        return await response.json();
    }
}
