export interface WhoisRequest {
  domain: string;
  type: "domain" | "contact";
}

export interface WhoisDomainInfo {
  domainName: string;
  registrar: string;
  registrationDate: string;
  expirationDate: string;
  estimatedDomainAge: string;
  hostnames: string;
}

export interface WhoisContactInfo {
  registrantName: string;
  technicalContactName: string;
  adminContactName: string;
  contactEmail: string;
}
