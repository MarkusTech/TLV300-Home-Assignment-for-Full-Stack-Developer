import { Request, Response } from "express";
import axios from "axios";
import { CONFIG } from "../config/env";

const WHOIS_URL = "https://www.whoisxmlapi.com/whoisserver/WhoisService";

export const getWhoisData = async (req: Request, res: Response) => {
  const { domain, type } = req.body;

  if (!domain || !type) {
    return res.status(400).json({ error: "Domain and type are required" });
  }

  try {
    const response = await axios.get(WHOIS_URL, {
      params: {
        apiKey: CONFIG.WHOIS_API_KEY,
        domainName: domain,
        outputFormat: "JSON",
      },
    });

    const whoisData = response.data?.WhoisRecord?.registryData || {};
    let result: Record<string, string> = {};

    if (type === "domain") {
      const hostnames = (whoisData.nameServers?.hostNames || []).join(", ");
      result = {
        domainName: domain,
        registrar: whoisData.registrarName || "N/A",
        registrationDate: whoisData.createdDate || "N/A",
        expirationDate: whoisData.expiresDate || "N/A",
        estimatedDomainAge: whoisData.estimatedDomainAge?.toString() || "N/A",
        hostnames:
          hostnames.length > 25 ? hostnames.slice(0, 25) + "..." : hostnames,
      };
    } else if (type === "contact") {
      result = {
        registrantName: whoisData.registrant?.name || "N/A",
        technicalContactName: whoisData.technicalContact?.name || "N/A",
        adminContactName: whoisData.administrativeContact?.name || "N/A",
        contactEmail: whoisData.registrant?.email || "N/A",
      };
    }

    return res.json(result);
  } catch (error: any) {
    console.error("WHOIS API error:", error.message);
    return res.status(500).json({ error: "Failed to fetch WHOIS data" });
  }
};
