import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [notificationEmail, setNotificationEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  const faqs: FAQItem[] = [
    {
      question: 'How is this different than ChatGPT?',
      answer: 'Lex Launch Crew is a business platform (workstation) and chatbot hybrid, that provides Lex (chatbot) with more context, guidance ability and potential value for your business, than any other AI service available. There are many differences that will become more obvious as we continue to build this product.',
    },
    {
      question: 'How do I know if Lex Launch Crew is right for me?',
      answer: 'We are currently building for Solo founders at any stage in their journey (pre idea - scaling). Currently Lex is not for enterprise, non-technical founders (vibe coders are welcome) or teams, but it\'s in the plans, so please show your interest below.',
    },
  ];

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you! We'll notify you when Lex is available for ${userType}.`);
    setNotificationEmail('');
    setUserType('');
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your question! We will get back to you soon.');
    setQuestionText('');
    setQuestionEmail('');
  };

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="section-header text-center mb-12">
          Common questions
        </h2>

        {/* Q&A Items */}
        <div className="space-y-8 mb-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-heading text-lg font-semibold text-[var(--blue-accent)] mb-3">
                {faq.question}
              </h3>
              <p className="body-regular">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Notification Signup Form */}
        <div className="max-w-[400px] mx-auto mb-12">
          <p className="body-regular mb-4">
            Add your email here to be notified when Lex Launch Crew is available for enterprise, teams and non-technical founders:
          </p>
          <form onSubmit={handleNotificationSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={notificationEmail}
              onChange={(e) => setNotificationEmail(e.target.value)}
              className="input-field"
              required
            />
            <Select value={userType} onValueChange={setUserType} required>
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="non-technical">Non-technical</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="btn-primary w-full">
              Notify Me
            </Button>
          </form>
        </div>

        {/* Question Submission Form */}
        <div className="max-w-[400px] mx-auto">
          <p className="body-regular mb-4">
            Submit questions here:
          </p>
          <form onSubmit={handleQuestionSubmit} className="space-y-4">
            <Textarea
              placeholder="Type your question here..."
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="textarea-field"
              required
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={questionEmail}
              onChange={(e) => setQuestionEmail(e.target.value)}
              className="input-field"
              required
            />
            <Button type="submit" className="btn-primary w-full">
              Submit Question
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
