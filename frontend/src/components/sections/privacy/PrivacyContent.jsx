import React from 'react';

const PrivacyContent = () => {
    return (
        <div className="flex-1 flex flex-col gap-[60px] max-w-[1160px]">
            {/* Introduction */}
            <section id="introduction" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black">Introduction</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-4">
                    <p>Daffodil Software Limited (“Daffodil”, “we”, “our”, or “us”) respects your privacy and is committed to protecting your personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you interact with our website, web development services, and e-commerce solutions.</p>
                    <div>
                        <p className="font-bold">This policy applies to:</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Visitors to our website</li>
                            <li>Clients using our web, e-commerce, ERP, or custom software services</li>
                            <li>Users interacting with our digital platforms, forms, and applications</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Information We Collect */}
            <section id="collect" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">Information We Collect</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We collect information to deliver, improve, and secure our services.</p>
                    
                    <div>
                        <h3 className="text-[24px] font-bold">2.1 Personal Information</h3>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Name, email address, phone number</li>
                            <li>Company name, job title</li>
                            <li>Billing and payment details</li>
                            <li>Communication data (emails, messages, meeting notes)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[24px] font-bold">2.2 Business & Project Information</h3>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Project requirements and documentation</li>
                            <li>Website or application data shared during development</li>
                            <li>API credentials, hosting details (if provided by client)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[24px] font-bold">2.3 Technical & Usage Data</h3>
                        <ul className="list-disc ml-6 mt-2">
                            <li>IP address, browser type, device information</li>
                            <li>Pages visited, session duration, click behavior</li>
                            <li>Cookies and tracking technologies</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[24px] font-bold">2.4 E-commerce Data (if applicable)</h3>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Customer transactions (processed via secure payment providers)</li>
                            <li>Order details, product data, and usage behavior</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How We Use Your Information */}
            <section id="use" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">How We Use Your Information</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We use collected data to:</p>
                    <ul className="list-disc ml-6">
                        <li>Deliver web development and e-commerce solutions</li>
                        <li>Understand user needs and improve UX and performance</li>
                        <li>Provide consultations, proposals, and project estimates</li>
                        <li>Communicate updates, support, and service notifications</li>
                        <li>Ensure platform security and prevent fraud</li>
                        <li>Comply with legal and regulatory obligations</li>
                    </ul>
                    <p>Your data directly supports better service customization, performance optimization, and decision-making insights, especially for business clients seeking scalable solutions.</p>
                </div>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">Cookies & Tracking Technologies</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc ml-6">
                        <li>Improve website functionality and performance</li>
                        <li>Analyze traffic and user behavior</li>
                        <li>Enable remarketing and personalization</li>
                    </ul>
                    <p>You can control cookie preferences through your browser settings.</p>
                </div>
            </section>

            {/* Data Sharing */}
            <section id="sharing" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">Data Sharing & Disclosure</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We implement industry-standard security measures, including:</p>
                    <ul className="list-disc ml-6">
                        <li>Secure servers and encrypted communication (HTTPS/SSL)</li>
                        <li>Access control and authentication systems</li>
                        <li>Regular monitoring and vulnerability checks</li>
                    </ul>
                    <p>However, no system is completely secure, and we encourage clients to follow best practices when sharing sensitive data.</p>
                </div>
            </section>

            {/* Data Security */}
            <section id="security" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">Data Security</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We implement industry-standard security measures, including:</p>
                    <ul className="list-disc ml-6">
                        <li>Secure servers and encrypted communication (HTTPS/SSL)</li>
                        <li>Access control and authentication systems</li>
                        <li>Regular monitoring and vulnerability checks</li>
                    </ul>
                    <p>However, no system is completely secure, and we encourage clients to follow best practices when sharing sensitive data.</p>
                </div>
            </section>

            {/* Data Retention */}
            <section id="retention" className="flex flex-col gap-6">
                <h2 className="text-[48px] font-medium text-black-400">Data Retention</h2>
                <div className="text-[16px] leading-[26px] text-black space-y-6">
                    <p>We retain your data only as long as necessary:</p>
                    <ul className="list-disc ml-6">
                        <li>For active projects and ongoing services</li>
                        <li>For legal, accounting, or compliance requirements</li>
                        <li>For improving long-term service delivery</li>
                    </ul>
                    <p>Once no longer needed, data is securely deleted or anonymized.</p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyContent;
