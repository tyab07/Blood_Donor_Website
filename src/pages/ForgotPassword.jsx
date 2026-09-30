import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                <div className="mb-6 text-center">
                    <span className="text-primary-600 text-2xl font-bold">●</span>
                    <h1 className="text-xl font-semibold text-surface-800 mt-2">Reset Password</h1>
                    <p className="text-sm text-surface-500 mt-1">
                        Enter your email and we&apos;ll send a reset link.
                    </p>
                </div>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="border border-surface-200 bg-white rounded-md p-6"
                >
                    <div className="mb-5">
                        <label htmlFor="reset-email" className="block text-sm font-medium text-surface-700 mb-1">
                            Email
                        </label>
                        <input
                            id="reset-email"
                            type="email"
                            required
                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="you@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="text-center text-sm text-surface-500 mt-4">
                    <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                        Back to login
                    </Link>
                </p>
            </div>
        </div>
    );
}
