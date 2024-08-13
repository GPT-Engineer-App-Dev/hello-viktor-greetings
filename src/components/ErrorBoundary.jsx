import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 p-4">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <details className="whitespace-pre-wrap bg-white p-4 rounded shadow">
            <summary className="cursor-pointer text-red-500 font-semibold">Error details</summary>
            <p className="mt-2">{this.state.error && this.state.error.toString()}</p>
            <p className="mt-2">{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;