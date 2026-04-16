
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Database,
  Cloud,
  Server,
  Code,
  Zap,
  X,
  Clock,
  Users,
  BookOpen,
} from 'lucide-react';
import { EnrollmentForm } from './EnrollmentForm';
import { CustomTrainingForm } from './CustomTrainingForm';

type TrainingProgram = {
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  level: string;
  gradient: string;
  overlayGradient: string;
  image: string;
  slug: string;
  price: string;
  provider: string;
};

export function Training({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const trainingPrograms: TrainingProgram[] = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description:
        'Master the fundamentals and advanced techniques of machine learning and artificial intelligence.',
      topics: [
        'Supervised/Unsupervised Learning',
        'Neural Networks',
        'Deep Learning',
        'NLP',
        'Computer Vision',
      ],
      duration: '8 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-purple-600 to-pink-600',
      overlayGradient: 'linear-gradient(135deg, #9333ea, #db2777)',
      image: '/images/ml-training.jpg',
      slug: 'machine-learning-ai',
      price: '₹50,000',
      provider: 'VSNION',
    },
    {
      icon: Database,
      title: 'Data Science',
      description:
        'Learn to extract insights from data using statistical analysis, visualization, and predictive modeling.',
      topics: [
        'Statistics & Probability',
        'Data Visualization',
        'Python/R Programming',
        'Big Data Tools',
        'Predictive Analytics',
      ],
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-blue-600 to-cyan-600',
      overlayGradient: 'linear-gradient(135deg, #2563eb, #0891b2)',
      image: '/images/data-science-training.jpg',
      slug: 'data-science',
      price: '₹45,000',
      provider: 'VSNION',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description:
        'Become proficient in cloud platforms and architectures for scalable, secure applications.',
      topics: [
        'AWS/Azure/GCP',
        'Cloud Architecture',
        'Serverless Computing',
        'Containerization',
        'Cloud Security',
      ],
      duration: '6 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-indigo-600 to-purple-600',
      overlayGradient: 'linear-gradient(135deg, #4f46e5, #9333ea)',
      image: '/images/cloud-training.jpg',
      slug: 'cloud-computing',
      price: '₹40,000',
      provider: 'VSNION',
    },
    {
      icon: Server,
      title: 'DevOps',
      description:
        'Master the practices and tools for efficient software development and deployment pipelines.',
      topics: [
        'CI/CD Pipelines',
        'Docker & Kubernetes',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Automation',
      ],
      duration: '7 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-orange-600 to-red-600',
      overlayGradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
      image: '/images/devops-training.jpg',
      slug: 'devops',
      price: '₹42,000',
      provider: 'VSNION',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Comprehensive training in modern web development technologies and frameworks.',
      topics: [
        'React/Vue/Angular',
        'Node.js/Python',
        'Databases',
        'APIs',
        'Testing & Deployment',
      ],
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-green-600 to-teal-600',
      overlayGradient: 'linear-gradient(135deg, #16a34a, #0d9488)',
      image: '/images/fullstack-training.jpg',
      slug: 'full-stack-development',
      price: '₹55,000',
      provider: 'VSNION',
    },
    {
      icon: Zap,
      title: 'IoT & Embedded Systems',
      description:
        'Dive into the world of connected devices and embedded programming.',
      topics: [
        'Microcontrollers',
        'Sensors & Actuators',
        'Wireless Communication',
        'Edge Computing',
        'IoT Security',
      ],
      duration: '9 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-emerald-600 to-blue-600',
      overlayGradient: 'linear-gradient(135deg, #059669, #2563eb)',
      image: '/images/iot-training.jpg',
      slug: 'iot-embedded-systems',
      price: '₹38,000',
      provider: 'VSNION',
    },
  ];

  const generateStructuredData = () => {
    const courses = trainingPrograms.map((program) => ({
      '@type': 'Course',
      name: program.title,
      description: program.description,
      provider: {
        '@type': 'Organization',
        name: program.provider,
        url: 'https://www.vsnion.com',
      },
      courseMode: 'online',
      educationalLevel: program.level,
      teaches: program.topics,
      timeRequired: program.duration,
      offers: {
        '@type': 'Offer',
        price: program.price.replace('₹', '').replace(',', ''),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      url: `https://www.vsnion.com/training/${program.slug}`,
      image: `https://www.vsnion.com${program.image}`,
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'VSNION Training Programs',
      description:
        'Comprehensive training programs designed to upskill your team with cutting-edge technologies',
      numberOfItems: courses.length,
      itemListElement: courses.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: course,
      })),
    };
  };

  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const selectedProgram = slug
    ? trainingPrograms.find((program) => program.slug === slug) ?? null
    : null;

  useEffect(() => {
    if (slug && !selectedProgram) {
      navigate('/training', { replace: true });
    }
  }, [slug, selectedProgram, navigate]);

  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [showCustomTrainingForm, setShowCustomTrainingForm] = useState(false);

  const metaTitle = selectedProgram
    ? `${selectedProgram.title} | VSNION Training`
    : 'Training Programs | VSNION';

  const metaDescription = selectedProgram
    ? selectedProgram.description
    : 'Comprehensive training programs in Machine Learning, Data Science, Cloud Computing, DevOps, Full-Stack Development, and IoT. Upskill your team with industry-leading courses.';

  const canonicalUrl = selectedProgram
    ? `https://www.vsnion.com/training/${selectedProgram.slug}`
    : 'https://www.vsnion.com/training';

  return (
    <>
      {isStandalonePage && (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta
            name="keywords"
            content="training programs, machine learning course, data science training, cloud computing certification, devops training, full stack development, IoT training, technology education, professional development, skill upgradation"
          />
          <meta
            property="og:title"
            content="Professional Training Programs | VSNION Technology Solutions"
          />
          <meta
            property="og:description"
            content="Comprehensive training programs in Machine Learning, Data Science, Cloud Computing, DevOps, Full-Stack Development, and IoT. Upskill your team with industry-leading courses."
          />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.vsnion.com/training-og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Professional Training Programs | VSNION Technology Solutions" />
          <meta name="twitter:description" content="Comprehensive training programs in Machine Learning, Data Science, Cloud Computing, DevOps, Full-Stack Development, and IoT. Upskill your team with industry-leading courses." />
          <meta name="twitter:image" content="https://www.vsnion.com/training-og-image.jpg" />
          <link rel="canonical" href={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(generateStructuredData())}</script>
        </Helmet>
      )}

      <section id="training" className="py-24 bg-gray-50" aria-labelledby="training-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 id="training-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Training{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to upskill your team with cutting-edge
              technologies and industry best practices.
            </p>
          </motion.div>

          {selectedProgram ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto grid w-full max-w-6xl gap-12 justify-center lg:grid-cols-[1.3fr_.8fr] mb-16"
            >
              <div className="space-y-10">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                  <div className="relative h-80 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProgram.gradient} opacity-95`} />
                    <img
                      src={selectedProgram.image}
                      alt={selectedProgram.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 flex flex-col justify-center px-8 py-6 text-white">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/85 font-semibold">
                        Training Program
                      </span>
                      <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        {selectedProgram.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base md:text-lg text-white/90">
                        {selectedProgram.description}
                      </p>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white shadow-sm">
                          <Clock className="w-4 h-4" />
                          {selectedProgram.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white shadow-sm">
                          <Users className="w-4 h-4" />
                          {selectedProgram.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <nav aria-label="Breadcrumb" className="mb-6">
                      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <li>
                          <Link to="/" className="hover:text-indigo-600">
                            Home
                          </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li>
                          <Link to="/training" className="hover:text-indigo-600">
                            Training
                          </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li className="text-gray-900 font-medium">{selectedProgram.title}</li>
                      </ol>
                    </nav>

                    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
                      <div className="space-y-8">
                        <section aria-labelledby="program-overview">
                          <h2 id="program-overview" className="text-3xl font-bold text-gray-900">
                            Program Overview
                          </h2>
                          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                            {selectedProgram.description}
                          </p>
                        </section>

                        <section aria-labelledby="learning-topics">
                          <h3 id="learning-topics" className="text-2xl font-semibold text-gray-900">
                            What You Will Learn
                          </h3>
                          <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {selectedProgram.topics.map((topic) => (
                              <div key={topic} className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                <p className="text-gray-700 font-medium">{topic}</p>
                              </div>
                            ))}
                          </div>
                        </section>

                        {showEnrollmentForm && (
                          <section aria-labelledby="enroll-form">
                            <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                              <EnrollmentForm
                                programTitle={selectedProgram.title}
                                onClose={() => setShowEnrollmentForm(false)}
                              />
                            </div>
                          </section>
                        )}
                      </div>

                      <aside className="space-y-6">
                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Highlights</h2>
                          <div className="space-y-4">
                            <div className="rounded-3xl bg-gray-50 p-5">
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="mt-2 font-semibold text-gray-900">{selectedProgram.duration}</p>
                            </div>
                            <div className="rounded-3xl bg-gray-50 p-5">
                              <p className="text-sm text-gray-500">Skill Level</p>
                              <p className="mt-2 font-semibold text-gray-900">{selectedProgram.level}</p>
                            </div>
                            <div className="rounded-3xl bg-gray-50 p-5">
                              <p className="text-sm text-gray-500">Format</p>
                              <p className="mt-2 font-semibold text-gray-900">Live Online Classes + Hands-on Projects</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white shadow-xl">
                          <h3 className="text-2xl font-semibold">Ready to join?</h3>
                          <p className="mt-3 text-sm text-indigo-100">
                            Fill the enrollment section below or contact us directly to reserve your seat.
                          </p>
                          <button
                            onClick={() => setShowEnrollmentForm(true)}
                            className="mt-6 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-colors"
                          >
                            Enroll in {selectedProgram.title}
                          </button>
                          <Link
                            to="/training"
                            className="mt-4 inline-flex w-full justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition-colors"
                          >
                            Back to all programs
                          </Link>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-2"
                    onClick={() => navigate(`/training/${program.slug}`)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${program.title} training program`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/training/${program.slug}`);
                      }
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                      style={{ background: program.overlayGradient }}
                    />

                    <div className="relative p-8 pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${program.gradient} shadow-lg`}>
                            <program.icon className="w-8 h-8 text-white" aria-hidden={true} />
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {program.duration}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{program.level}</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                        {program.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                    </div>

                    <div className="px-8 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {program.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                        {program.topics.length > 3 && (
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                            +{program.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Click to learn more</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-indigo-600 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <section
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  aria-labelledby="custom-training-heading"
                >
                  <h2 id="custom-training-heading" className="text-2xl font-bold text-gray-900 mb-4">
                    Custom Training Solutions
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Need a tailored training program for your organization's specific needs? We offer
                    customized training solutions designed around your team's requirements and goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setShowCustomTrainingForm(true)}
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      aria-describedby="custom-training-description"
                    >
                      Request Custom Training
                    </button>
                  </div>
                  <p id="custom-training-description" className="sr-only">
                    Opens a form to request customized training programs tailored to your organization's
                    needs
                  </p>
                </section>
              </motion.div>
            </>
          )}

          <AnimatePresence>
            {showCustomTrainingForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setShowCustomTrainingForm(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-8 border-b border-gray-100">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Request Custom Training</h2>
                      <p className="text-gray-600 mt-2">
                        Tell us about your training needs and we'll create a personalized program
                      </p>
                    </div>
                    <button
                      onClick={() => setShowCustomTrainingForm(false)}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  <div className="p-8">
                    <CustomTrainingForm onClose={() => setShowCustomTrainingForm(false)} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}