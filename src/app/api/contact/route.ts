
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const apiEndpoint = "https://crm.ledger1.ai/api/forms/submit";

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // The external API returns 200 with no body on success
        if (response.ok) {
            return NextResponse.json({ success: true, message: 'Submission successful' });
        }

        // Try to get error details if any
        const errorText = await response.text();
        return NextResponse.json(
            { success: false, error: errorText || 'Submission failed' },
            { status: response.status }
        );

    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
