"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SOCIALS, SITE } from "@/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "Tell me a little more (10+ characters)"),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    setSending(true);
    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, values, { publicKey });
      } else {
        // No keys configured yet — simulate success in development.
        await new Promise((r) => setTimeout(r, 800));
      }
      toast.success("Message sent — I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-hair/10 bg-surface/5 px-4 py-3 text-sm outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20 placeholder:text-mist";

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's build something"
          subtitle="Have a role, a project, or an idea? Send a message and I'll reply."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* form */}
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 md:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm">Name</label>
                  <input id="name" {...register("name")} className={fieldClass} placeholder="Jane Doe" />
                  {errors.name && <p className="mt-1 text-xs text-magenta">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm">Email</label>
                  <input id="email" type="email" {...register("email")} className={fieldClass} placeholder="jane@email.com" />
                  {errors.email && <p className="mt-1 text-xs text-magenta">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-sm">Subject</label>
                <input id="subject" {...register("subject")} className={fieldClass} placeholder="Project enquiry" />
                {errors.subject && <p className="mt-1 text-xs text-magenta">{errors.subject.message}</p>}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm">Message</label>
                <textarea id="message" rows={5} {...register("message")} className={fieldClass} placeholder="Tell me about it…" />
                {errors.message && <p className="mt-1 text-xs text-magenta">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 disabled:opacity-60"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>

          {/* side panel */}
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-6 md:p-8">
              <div>
                <h3 className="text-lg font-semibold">Other ways to reach me</h3>
                <p className="mt-2 text-sm text-mist">
                  Prefer email or social? I&apos;m reachable on all of these.
                </p>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="mt-6 inline-block font-mono text-cyan transition hover:underline"
                >
                  {SITE.email}
                </Link>
              </div>
              <div className="mt-8 flex gap-3">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hair/10 bg-surface/5 text-mist transition hover:scale-110 hover:text-cyan"
                  >
                    <s.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
