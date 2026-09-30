import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                {/* Brand */}
                <div className="mb-8 text-center">
                    <span className="text-primary-600 text-2xl font-bold">●</span>
                    <h1 className="text-xl font-semibold text-surface-800 mt-2">BloodLink</h1>
                    <p className="text-sm text-surface-500 mt-1">Blood Donor &amp; Emergency Support</p>
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="border border-surface-200 bg-white rounded-md p-6"
                >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-surface-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <label className="flex items-center gap-2 text-sm text-surface-600">
                            <input type="checkbox" className="rounded border-surface-300" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                            Forgot password?
                        </Link>
                    </div>

                    <Link
                        to="/donor/dashboard"
                        className="block w-full bg-primary-600 text-white text-center text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors"
                    >
                        Sign in
                    </Link>
                </form>

                <p className="text-center text-sm text-surface-500 mt-4">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                        Register
                    </Link>
                </p>

                <p className="text-center text-xs text-surface-400 mt-6">
                    Account locks after 5 failed attempts for security.
                </p>
            </div>
        </div>
    );
}
