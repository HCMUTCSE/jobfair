import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, PartyPopper } from "lucide-react";

const targetDate = new Date("2026-06-15T09:00:00");

const EnrollPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">

        {/* Phần này chưa xử lí nên cmt lại */}
        {/* <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
 */}
        {/* Header badge */}
       {/*  <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <PartyPopper size={14} />
            CSE JOB FAIR 2026
          </div>
        </motion.div>
 */}


        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl border border-border shadow-card p-8 md:p-12 text-center"
        >
          {/* Number badge */}
          <div className="inline-flex items-baseline gap-1 mb-6">
            <span className="font-display font-bold text-6xl text-accent">20</span>
            <span className="font-display text-2xl text-accent">/</span>
            <span className="font-display text-lg text-muted-foreground">100</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="text-accent" size={24} />
            <h1 className="font-display font-bold text-xl text-accent">#ĐÃ THAM GIA</h1>
          </div>

          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            SỰ KIỆN SẼ BẮT ĐẦU SAU
          </h2>

          {/* Countdown */}
          <div className="flex justify-center gap-3 my-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.mins, label: "Mins" },
              { value: timeLeft.secs, label: "Secs" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="bg-navy rounded-xl w-16 h-16 flex items-center justify-center mb-1">
                  <span className="font-display font-bold text-2xl text-primary-foreground">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Info rows */}
          <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Mã số đăng ký của bạn</span>
              <span className="text-sm font-bold text-foreground">CSE-2026-0020</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Sắc khách tham gia số</span>
              <span className="text-sm font-bold text-foreground">20</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-display font-bold text-sm animate-pulse-glow"
            >
              VÀO THÔI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-muted text-foreground px-8 py-3 rounded-xl font-display font-bold text-sm"
            >
              Share
            </motion.button>
          </div>
        </motion.div>

        {/* Sponsor info below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-card rounded-2xl border border-border shadow-card p-6"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur vulputate libero. Fusce efficitur vel sem vitae semper. Maecenas feugiat tempus lacinia. Suspendisse condimentum finibus diam ut sollicitudin.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollPage;
