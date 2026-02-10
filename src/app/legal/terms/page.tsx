export default function TermsPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>This is a placeholder Terms of Service for NexuM Labs.</p>
                <p><strong>1. Services</strong><br />NexuM Labs provides software engineering and consulting services.</p>
                <p><strong>2. Payment</strong><br />Terms are defined in individual statements of work.</p>
            </div>
        </main>
    );
}
