export interface Job {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

export const experience: Job[] = [
  {
    company: "Touchpad Electronics",
    title: "Quality Technician",
    dates: "July 2025 – Present",
    bullets: [
      "IPC-A-600 and DOD certified.",
      "Performed hardware-level diagnostics using 3D AOI systems to identify component, alignment, and assembly defects impacting system reliability.",
      "Developed and maintained 2D/3D AOI inspection programs, including creation of CXF and SRF files, to improve detection accuracy and reduce false positives.",
      "Conducted X-ray analysis of PCB assemblies, validating integrity of hidden connections and identifying failure points.",
      "Applied IPC-A-610 standards to enforce strict quality and compliance requirements in hardware systems.",
      "Supported first article and validation testing of new hardware builds, ensuring systems met functional and reliability requirements before deployment.",
    ],
    tech: ["IPC-A-610", "AOI Systems", "X-ray Analysis", "PCB Inspection", "Quality Control"],
  },
  // TODO: Add more jobs here
];
