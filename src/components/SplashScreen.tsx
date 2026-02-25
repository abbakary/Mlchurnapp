import { useState, useEffect } from 'react';
import customerImage from '../assets/images/customerchurn.png';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);
    const [seconds, setSeconds] = useState(7);

    useEffect(() => {
        const duration = 7000; // Changed from 13000 to 7000 (7 seconds)
        const interval = 50;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 100 : prev + step));
        }, interval);

        const countdown = setInterval(() => {
            setSeconds(prev => (prev <= 0 ? 0 : prev - 1));
        }, 1000);

        const timeout = setTimeout(onFinish, duration);

        return () => {
            clearInterval(timer);
            clearInterval(countdown);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    return (
        <div className="splash-wrapper">
            <div className="splash-card">
                {/* Background decoration */}
                <div className="card-bg">
                    <div className="gradient-sphere" />
                    <div className="gradient-sphere-2" />
                </div>

                {/* Animated particles */}
                <div className="particles">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="content">
                    <div className="logo-container">
                        <div className="logo-glow" />
                        <img
                            src={customerImage}
                            alt="Customer"
                            className="logo"
                        />
                        <div className="logo-ring" />
                    </div>

                    <h1 className="title">
                        <span className="title-gradient">Customer Churn</span>
                        <span className="title-light">Prediction</span>
                    </h1>

                    <p className="subtitle">
                        <span className="subtitle-badge">AI-Powered</span>
                        <span className="subtitle-text">Secure Intelligence · Predictive Excellence</span>
                    </p>

                    <div className="progress-section">
                        <div className="progress-header">
                            <span className="progress-label">Initializing Neural Core</span>
                            <span className="progress-value">{Math.round(progress)}%</span>
                        </div>

                        <div className="progress-bar-container">
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="progress-bar-glow" style={{ width: `${progress}%` }} />
                        </div>

                        <div className="timer">
                            <svg className="timer-icon" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span>{seconds}s</span>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-dots">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                        <span className="footer-text">v2.0.1 · Enterprise Edition</span>
                    </div>
                </div>
            </div>

            <style>{`
        .splash-wrapper {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0a0a1f 0%, #1a1a3a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .splash-card {
          position: relative;
          width: 480px;
          background: rgba(20, 20, 40, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 40px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
        }

        /* Background spheres */
        .card-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-sphere {
          position: absolute;
          width: 300px;
          height: 300px;
          left: -150px;
          top: -150px;
          background: radial-gradient(circle at center, rgba(0, 245, 255, 0.15), transparent 70%);
          border-radius: 50%;
          animation: rotate-slow 20s linear infinite;
        }

        .gradient-sphere-2 {
          position: absolute;
          width: 300px;
          height: 300px;
          right: -150px;
          bottom: -150px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%);
          border-radius: 50%;
          animation: rotate-slow 25s linear infinite reverse;
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #00f5ff, #8b5cf6);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(1px);
          animation: particle-float linear infinite;
        }

        @keyframes particle-float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px) scale(1.5);
            opacity: 0.6;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
        }

        /* Content */
        .content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        /* Logo */
        .logo-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 8px;
        }

        .logo-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(0, 245, 255, 0.4), transparent 70%);
          filter: blur(20px);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .logo {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid rgba(0, 245, 255, 0.3);
          animation: float 4s ease-in-out infinite;
          box-shadow: 0 10px 30px -10px rgba(0, 245, 255, 0.3);
        }

        .logo-ring {
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(0, 245, 255, 0.2);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Title */
        .title {
          text-align: center;
          margin: 0;
          line-height: 1.2;
        }

        .title-gradient {
          display: block;
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, #00f5ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 10px rgba(0, 245, 255, 0.2);
        }

        .title-light {
          display: block;
          font-size: 1.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: -0.01em;
        }

        /* Subtitle */
        .subtitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .subtitle-badge {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 12px;
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(0, 245, 255, 0.2);
          border-radius: 20px;
          color: #00f5ff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .subtitle-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
        }

        /* Progress Section */
        .progress-section {
          width: 100%;
          margin-top: 16px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.85rem;
        }

        .progress-label {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .progress-value {
          color: #00f5ff;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
        }

        .progress-bar-container {
          position: relative;
          height: 6px;
          margin-bottom: 16px;
        }

        .progress-bar-bg {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00f5ff, #8b5cf6);
          border-radius: 3px;
          transition: width 0.05s linear;
          box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
        }

        .progress-bar-glow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: skewX(-20deg) translateX(-100%);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          100% {
            transform: skewX(-20deg) translateX(200%);
          }
        }

        /* Timer */
        .timer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .timer-icon {
          width: 18px;
          height: 18px;
          color: #8b5cf6;
          animation: rotate 4s linear infinite;
        }

        /* Footer */
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: rgba(0, 245, 255, 0.3);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.5s;
          background: rgba(139, 92, 246, 0.3);
        }

        .dot:nth-child(3) {
          animation-delay: 1s;
          background: rgba(255, 255, 255, 0.3);
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        .footer-text {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.2);
          letter-spacing: 0.05em;
        }

        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .splash-card {
            width: 90%;
            padding: 30px 20px;
          }

          .title-gradient {
            font-size: 1.8rem;
          }

          .title-light {
            font-size: 1.4rem;
          }

          .logo-container {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
        </div>
    );
}