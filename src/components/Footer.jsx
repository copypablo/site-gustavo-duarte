import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@gustavoduarte.com.br",
      link: "mailto:contato@gustavoduarte.com.br"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(11) 99999-9999",
      link: "https://wa.me/5511999999999"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://instagram.com/duartegustt",
      color: "hover:text-pink-400"
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "#",
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-card/50 to-background border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Gustavo Duarte</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Consultoria Nutricional Personalizada para mulheres que querem emagrecer 
                com saúde e qualidade de vida.
              </p>
              <div className="glass-effect p-4 rounded-xl">
                <p className="text-sm text-white/80">
                  <span className="text-primary font-semibold">CNPJ:</span> XX.XXX.XXX/XXXX-XX
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/70">São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary mb-6">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary mb-6">Links Rápidos</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="block text-white/80 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
                <div className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-white/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Media & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary mb-6">Redes Sociais</h4>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-white/80 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Stats */}
              <div className="glass-effect p-6 rounded-xl">
                <h5 className="text-lg font-semibold text-white mb-4">Nossos Números</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Pacientes Atendidos</span>
                    <span className="text-primary font-bold">3.200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Taxa de Sucesso</span>
                    <span className="text-green-400 font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Seguidores</span>
                    <span className="text-primary font-bold">711k+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 Gustavo Duarte - Consultoria Nutricional. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>Desenvolvido com ❤️ para transformar vidas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

