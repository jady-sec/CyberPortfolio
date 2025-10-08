import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cloud, 
  AlertTriangle, 
  Monitor, 
  CodeXml,
  ShieldAlert
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2 relative">
                <span className="text-[#00FF8C]">#</span> About Me
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-8 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <p className="mb-6 text-gray-300">
                I'm a driven cybersecurity graduate passionate about unraveling digital threats and building resilient defenses. 
                Skilled in blending innovative tools with strategic thinking, 
                I excel at transforming complex challenges into actionable solutions—like outsmarting attackers and securing systems. 
                Let's collaborate and advance security together!
              </p>
              
              <p className="text-gray-300">
                As a dedicated cybersecurity graduate with hands-on experience as a Security Analyst at Nova Mutual Insurance, 
                I have contributed to threat detection, incident response planning, and regulatory compliance in a dynamic small-business environment, 
                while developing automated SOAR workflows to detect and respond to credential-dumping threats using tools like LimaCharlie EDR and Tines, 
                and deploying honeypot systems for real-time threat capture and OSINT analysis with SpiderFoot to enhance proactive security measures.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <ShieldCheck />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Security Analysis</h3>
                <p className="text-sm text-gray-400">Experienced in threat detection and incident response planning</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Cloud />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Cloud Security</h3>
                <p className="text-sm text-gray-400">Expertise in Azure security implementations</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <AlertTriangle />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Threat Intelligence</h3>
                <p className="text-sm text-gray-400">Skilled in OSINT reconnaissance and threat mitigation</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Monitor />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Endpoint Security</h3>
                <p className="text-sm text-gray-400">Experienced in EDR implementation and automated responses</p>
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-[#00FF8C]">#</span> Education
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-6 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{'>'}</span> <span className="text-white">Postgraduate Diploma, Cybersecurity Response Planning</span>
                </h3>
                <p className="text-gray-400 mb-1">CONESTOGA COLLEGE</p>
                <p className="text-[#808080] text-sm mb-1">Waterloo, Ontario</p>
              </div>
              
              <div>
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{'>'}</span> <span className="text-white">Postgraduate Diploma, Computer Application Security</span>
                </h3>
                <p className="text-gray-400 mb-1">CONESTOGA COLLEGE</p>
                <p className="text-[#808080] text-sm mb-1">Waterloo, Ontario</p>
              </div>

              <div>
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{'>'}</span> <span className="text-white">Bachelors in Computer Engineering</span>
                </h3>
                <p className="text-gray-400 mb-1">ANNA UNIVERSITY</p>
                <p className="text-[#808080] text-sm mb-1">Chennai, India</p>
              </div>
            </motion.div>
            
            <div>
              <motion.div className="mb-6 inline-block" variants={itemVariants}>
                <h2 className="text-3xl font-bold font-mono mb-2">
                  <span className="text-[#00FF8C]">#</span> Positions
                  <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
                </h2>
              </motion.div>
              
              <div className="grid gap-4">
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono text-[#FFFFFF] font-semibold mb-1">TryHackMe Community Member</h3>
                      <p className="text-sm text-gray-400 mb-2">Premium Member | March 2024 – Present</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <CodeXml />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Active participant in cybersecurity training platform, completing hands-on labs in ethical hacking, network security, 
                    and incident response to build practical skills.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono text-[#FFFFFF] font-semibold mb-1">(ISC)², Candidate</h3>
                      <p className="text-sm text-gray-400 mb-2">Member | Jan 2025 – Jan 2026</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <ShieldAlert />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Part of (ISC)² members and associates comprising the largest global association of expert cybersecurity 
                    professionals dedicated to inspiring a safe and secure cyber world.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
