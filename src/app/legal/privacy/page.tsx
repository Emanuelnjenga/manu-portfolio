export default function PrivacyPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>This is a placeholder privacy policy for NexuM Labs.</p>
                <p><strong>1. Data Collection</strong><br />We collect information you provide directly to us via the contact form.</p>
                <p><strong>2. Usage</strong><br />We use this data only to respond to your inquiries.</p>
                <p><strong>3. Contact</strong><br />For questions, email hello@nexumlabs.example.</p>
            </div>
        </main>
    );
}
