"use client";

import { useState } from "react";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import { site } from "../data/site";

const inputClasses =
  "w-full p-3.5 bg-surface border border-ink/16 rounded-lg focus:outline-none focus:border-terracotta text-[15px]";
const labelClasses = "block text-sm font-medium text-ink mb-1.5";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDescription: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
    eircode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectDescription: "",
          addressLine1: "",
          addressLine2: "",
          town: "",
          county: "",
          eircode: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error submitting the form. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-cream">
      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pt-36 md:pt-44 pb-4 text-center">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-3.5">
          Get in touch
        </span>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mx-auto max-w-[20ch]">
          Let&rsquo;s talk about your project
        </h1>
        <p className="text-base md:text-lg text-ink/75 max-w-[52ch] mx-auto mt-4">
          Reach out for a free, no-obligation consultation on patios, driveways, garden design and more &mdash; we
          cover {site.areasServed.join(", ")}.
        </p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-14 items-start">
        <div className="flex flex-col gap-4">
          <div className="bg-surface rounded-lg p-5 flex gap-3.5 items-start">
            <div>
              <div className="text-xs text-ink/60 mb-1">Phone</div>
              <a href={site.phoneHref} className="text-base font-semibold text-ink">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-5 flex gap-3.5 items-start">
            <div>
              <div className="text-xs text-ink/60 mb-1">Email</div>
              <a href={`mailto:${site.email}`} className="text-base font-semibold text-ink">
                {site.email}
              </a>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-5">
            <div className="text-xs text-ink/60 mb-1">Based in</div>
            <div className="text-base font-semibold text-ink">
              {site.address.street}, Co. {site.address.region}
            </div>
            <div className="text-[13.5px] text-ink/65 mt-1">
              Serving {site.areasServed.join(", ")}
            </div>
          </div>
          <div className="bg-sage-100 rounded-lg p-5">
            <div className="text-xs text-ink/65 mb-1">Hours</div>
            <div className="text-[15px] font-semibold">
              {site.hours.days}, {site.hours.open} &ndash; {site.hours.close}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-[calc(var(--radius-lg)*1.15)] p-6 md:p-10 flex flex-col gap-4.5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className={labelClasses}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClasses}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="projectDescription" className={labelClasses}>Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={4}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="addressLine1" className={labelClasses}>Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="addressLine2" className={labelClasses}>Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="town" className={labelClasses}>Town</label>
              <input
                type="text"
                id="town"
                name="town"
                value={formData.town}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="county" className={labelClasses}>County</label>
              <input
                type="text"
                id="county"
                name="county"
                value={formData.county}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="eircode" className={labelClasses}>Eircode</label>
              <input
                type="text"
                id="eircode"
                name="eircode"
                value={formData.eircode}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>

          {responseMessage && (
            <div className="p-3.5 text-center text-sm rounded-lg bg-sage-100 text-sage-800">
              {responseMessage}
            </div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Send Enquiry"}
          </Button>
          <p className="text-xs text-ink/60 text-center">
            We&rsquo;ll get back to you within one working day.
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}
