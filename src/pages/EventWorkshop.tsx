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
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactModalProps = {
  defaultCourse?: string;
  defaultDate?: string;
  triggerContent?: React.ReactNode;
};

export default function EventWorkshop({
  defaultCourse = "",
  defaultDate = "",
  triggerContent,
}: ContactModalProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(defaultCourse);
  const [date, setDate] = useState(defaultDate);

  const [phone, setPhone] = useState("+91");

  useEffect(() => {
    if (open) {
      setCourse(defaultCourse);
      setDate(defaultDate);
      setPhone("+91");
    }
  }, [open, defaultCourse, defaultDate]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith("+91")) {
      value = "+91";
    }

    const digits = value.slice(3).replace(/\D/g, "");

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
      date: { value: string };
      course: { value: string };
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${encodeURIComponent(
        target.name.value
      )}&Email=${encodeURIComponent(
        target.email.value
      )}&Phone=${encodeURIComponent(phone)}&Date=${encodeURIComponent(
        target.date.value
      )}&Course=${encodeURIComponent(target.course.value)}`,
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
            Register Now <ArrowRight className="ml-2 w-4 h-4" />
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
                <label className="block text-sm font-medium mb-2">Date</label>
                <Input
                  name="date"
                  value={date}
                  readOnly
                  className="w-full cursor-not-allowed bg-muted hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Workshop
                </label>
                <Input
                  name="course"
                  value={course}
                  readOnly
                  className="w-full cursor-not-allowed bg-muted hover:border-primary/50 focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full btn-glow hover:scale-[1.02] transition-transform duration-300"
            >
              Register
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
