export const certificates = [
  {
    title: "Web Developer Full-Stack",
    issuer: "DOT Academy",
    image: "/certificates/dot-academy.webp",
    group: "Training",
  },
  {
    title: "Master in Web Development",
    issuer: "Profession AI",
    image: "/certificates/professionai.webp",
    group: "Training",
  },
  {
    title: "IT Developer Specialist",
    issuer: "Infobasic",
    image: "/certificates/infobasic.webp",
    group: "Training",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco_cybersecurity.webp",
    group: "Cisco Networking Academy",
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco_netessentials.webp",
    group: "Cisco Networking Academy",
  },
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco_itessentials.webp",
    group: "Cisco Networking Academy",
  },
];

export const certificateGroups = [
  {
    label: "Training",
    items: certificates.filter((certificate) => certificate.group === "Training"),
  },
  {
    label: "Cisco Networking Academy",
    items: certificates.filter((certificate) => certificate.group === "Cisco Networking Academy"),
  },
];
