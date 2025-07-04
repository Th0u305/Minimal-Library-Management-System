import { BookOpen, TrendingUp, Users } from "lucide-react";

const Stats = () => {
    return (
            <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, number: "10K+", label: "Books Available", color: "from-blue-500 to-cyan-500" },
              { icon: Users, number: "50K+", label: "Happy Readers", color: "from-purple-500 to-pink-500" },
              { icon: TrendingUp, number: "95%", label: "Satisfaction Rate", color: "from-green-500 to-emerald-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Stats;