export default function StatusBadge({ status }) {
    const styles = {
        open: 'bg-blue-50 text-blue-700 border-blue-200',
        matched: 'bg-green-50 text-green-700 border-green-200',
        closed: 'bg-surface-100 text-surface-500 border-surface-200',
        expired: 'bg-surface-100 text-surface-400 border-surface-200',
        urgent: 'bg-red-50 text-red-700 border-red-200',
        active: 'bg-green-50 text-green-700 border-green-200',
        pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        blocked: 'bg-red-50 text-red-700 border-red-200',
        approved: 'bg-green-50 text-green-700 border-green-200',
    };

    const key = status?.toLowerCase() || 'open';

    return (
        <span
            className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded ${styles[key] || styles.open
                }`}
        >
            {status}
        </span>
    );
}
