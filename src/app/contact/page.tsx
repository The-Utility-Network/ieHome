'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function ContactPage() {
    useEffect(() => {
        // Inject the contact form script
        const formSlug = "invisible-enemies-contact-form-92f26ca0";
        const apiEndpoint = "https://crm.ledger1.ai/api/forms/submit";

        // Theme configuration - Updated for dark theme with purple accents
        const theme = {
            primaryColor: "#A855F7",
            backgroundColor: "transparent",
            textColor: "#ffffff",
            borderColor: "rgba(168, 85, 247, 0.3)",
            borderRadius: "8px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            buttonTextColor: "#000000",
            labelColor: "#e5e7eb",
            inputBgColor: "rgba(255, 255, 255, 0.05)",
            inputFocusBg: "rgba(255, 255, 255, 0.08)",
            inputFocusBorder: "#A855F7"
        };

        const container = document.getElementById("form-" + formSlug);
        if (!container || container.hasChildNodes()) return;

        const form = document.createElement("form");
        form.id = "crm-form-" + formSlug;
        form.style.cssText = "max-width:600px;margin:0 auto;font-family:" + theme.fontFamily + ";background:" + theme.backgroundColor + ";";

        const fields = [
            { name: "first_name", label: "First Name", type: "text", required: true, placeholder: "Your first name" },
            { name: "last_name", label: "Last Name", type: "text", required: true, placeholder: "Your last name" },
            { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
            { name: "phone", label: "Phone", type: "phone", required: false, placeholder: "(555) 123-4567" },
            { name: "role", label: "I am a", type: "radio", required: true, placeholder: null },
            { name: "city", label: "City", type: "text", required: false, placeholder: "City" },
            { name: "state", label: "State/Province", type: "text", required: false, placeholder: "State or province" },
            { name: "message", label: "How can we help?", type: "textarea", required: true, placeholder: "Tell us about your needs or how you'd like to contribute..." }
        ];

        fields.forEach(function (field) {
            const wrapper = document.createElement("div");
            wrapper.style.marginBottom = "20px";

            const label = document.createElement("label");
            label.textContent = field.label + (field.required ? " *" : "");
            label.style.cssText = "display:block;margin-bottom:8px;font-weight:500;color:" + theme.labelColor + ";font-size:14px;";
            wrapper.appendChild(label);

            if (field.type === "radio") {
                // Radio buttons with dark theme styling
                const radioOptions = ["Veteran", "Family Member", "Supporter", "Organization"];
                radioOptions.forEach((option, index) => {
                    const radioWrapper = document.createElement("div");
                    radioWrapper.style.cssText = "display:flex;align-items:center;margin-bottom:10px;";

                    const radioInput = document.createElement("input");
                    radioInput.type = "radio";
                    radioInput.name = field.name;
                    radioInput.value = option;
                    radioInput.id = `${field.name}-${index}`;
                    radioInput.required = field.required && index === 0; // Only first needs required
                    radioInput.style.cssText = "margin-right:10px;width:18px;height:18px;accent-color:" + theme.primaryColor + ";cursor:pointer;";

                    const radioLabel = document.createElement("label");
                    radioLabel.htmlFor = `${field.name}-${index}`;
                    radioLabel.textContent = option;
                    radioLabel.style.cssText = "font-size:14px;color:" + theme.textColor + ";cursor:pointer;";

                    radioWrapper.appendChild(radioInput);
                    radioWrapper.appendChild(radioLabel);
                    wrapper.appendChild(radioWrapper);
                });
                form.appendChild(wrapper);
                return;
            }

            let input: HTMLInputElement | HTMLTextAreaElement;
            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.rows = 4;
                input.style.resize = "vertical";
            } else {
                input = document.createElement("input");
                input.type = field.type === "email" ? "email" : field.type === "phone" ? "tel" : "text";
            }

            input.name = field.name;
            input.required = field.required;
            input.placeholder = field.placeholder || "";
            input.style.cssText = "width:100%;padding:12px 16px;border:1px solid " + theme.borderColor + ";border-radius:" + theme.borderRadius + ";font-size:14px;background:" + theme.inputBgColor + ";color:" + theme.textColor + ";box-sizing:border-box;transition:all 0.2s ease;font-family:inherit;";

            // Focus effects
            input.addEventListener('focus', function () {
                input.style.background = theme.inputFocusBg;
                input.style.borderColor = theme.inputFocusBorder;
                input.style.outline = "none";
            });
            input.addEventListener('blur', function () {
                input.style.background = theme.inputBgColor;
                input.style.borderColor = theme.borderColor;
            });

            wrapper.appendChild(input);
            form.appendChild(wrapper);
        });

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.textContent = "Submit";
        submit.style.cssText = "background:" + theme.primaryColor + ";color:" + theme.buttonTextColor + ";border:none;padding:14px 32px;border-radius:" + theme.borderRadius + ";cursor:pointer;font-size:14px;font-weight:600;width:100%;margin-top:12px;transition:all 0.2s ease;text-transform:uppercase;letter-spacing:0.5px;";

        // Hover effect
        submit.addEventListener('mouseover', function () {
            submit.style.transform = "translateY(-1px)";
            submit.style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.4)";
        });
        submit.addEventListener('mouseout', function () {
            submit.style.transform = "translateY(0)";
            submit.style.boxShadow = "none";
        });

        form.appendChild(submit);

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            submit.disabled = true;
            submit.textContent = "Submitting...";
            submit.style.opacity = "0.7";
            submit.style.cursor = "not-allowed";

            const data: Record<string, string> = {};
            new FormData(form).forEach(function (v, k) { data[k] = v.toString(); });

            fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form_slug: formSlug,
                    data: data,
                    source_url: window.location.href,
                    referrer: document.referrer
                })
            })
                .then(function (response) {
                    // API returns 200 with no response body on success
                    if (response.ok && response.status === 200) {
                        form.innerHTML = "<p style='color:" + theme.primaryColor + ";font-weight:500;text-align:center;padding:40px 20px;font-size:16px;'>Thank you for your submission! We'll be in touch soon.</p>";
                        return;
                    }

                    // If not 200, try to parse error message
                    return response.text().then(function (text) {
                        throw new Error(text || "Submission failed");
                    });
                })
                .catch(function (error) {
                    console.error("Form submission error:", error);
                    alert(error.message || "Submission failed. Please try again.");
                    submit.disabled = false;
                    submit.textContent = "Submit";
                    submit.style.opacity = "1";
                    submit.style.cursor = "pointer";
                });
        });

        container.appendChild(form);
    }, []);

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-xs font-mono tracking-widest text-[#A855F7]">GET IN TOUCH</span>
                    <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">Contact Us</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Whether you're a veteran seeking support, a family member looking for resources, or someone who wants to contribute to our mission, we want to hear from you.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl mx-auto">
                        <div id="form-invisible-enemies-contact-form-92f26ca0"></div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="glass-panel p-6 rounded-xl">
                        <div className="w-12 h-12 rounded-full bg-[#A855F7]/10 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-bold mb-2">Email Support</h3>
                        <p className="text-sm text-gray-400">We respond to all inquiries within 24-48 hours</p>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <div className="w-12 h-12 rounded-full bg-[#A855F7]/10 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold mb-2">Community</h3>
                        <p className="text-sm text-gray-400">Join our Discord for real-time support and conversations</p>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <div className="w-12 h-12 rounded-full bg-[#A855F7]/10 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="font-bold mb-2">Resources</h3>
                        <p className="text-sm text-gray-400">Access our documentation and whitepaper for more information</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
