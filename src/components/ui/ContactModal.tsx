import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactModalProps = {
  defaultCourse?: string;
  triggerContent?: React.ReactNode;
};

export default function ContactModal({
  defaultCourse = "",
  triggerContent,
}: ContactModalProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(defaultCourse);

  // Controlled phone input state with +91 prefix
  const [phone, setPhone] = useState("+91");

  useEffect(() => {
    if (open) {
      setCourse(defaultCourse);
      setPhone("+91"); // reset phone on open
    }
  }, [open, defaultCourse]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Always enforce prefix +91
    if (!value.startsWith("+91")) {
      value = "+91";
    }

    // Extract digits after +91 and remove non-digit chars
    const digits = value.slice(3).replace(/\D/g, "");

    // Limit to 10 digits max
    const limitedDigits = digits.slice(0, 10);

    setPhone("+91" + limitedDigits);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);

    const url =
      "https://script.google.com/macros/s/AKfycbzCtv2ZuwNvJB6HHeTxd3prigCKTFA0jFWCAql74T_e6l7Nzuvd-AUbwgCPk3CvXEvtcg/exec";

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      course: { value: string };
      message: { value: string };
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${encodeURIComponent(
        target.name.value
      )}&Email=${encodeURIComponent(
        target.email.value
      )}&Phone=${encodeURIComponent(phone)}&Course=${encodeURIComponent(
        target.course.value
      )}&Message=${encodeURIComponent(target.message.value)}`,
    })
      .then((res) => res.text())
      .then(() => {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setPhone("+91");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerContent ? (
          triggerContent
        ) : (
          <Button className="w-full btn-glow group-hover:scale-[1.02] transition-transform duration-300">
            Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold font-poppins">
            Send us a Message
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 pt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Interested Course
                </label>
                <Input
                  name="course"
                  value={course}
                  readOnly
                  className="w-full cursor-not-allowed bg-muted hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                name="message"
                placeholder="Tell us about your goals..."
                rows={4}
                className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-glow hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
