import { Request, Response } from "express";
import axios from "axios";
import { CONFIG } from "../config/env";

/**
 * Helper: format hostnames into comma-separated and truncate if > 25 chars
 */
function formatHostnames(hostnames: string[] = []): string {
  const joined = hostnames.join(", ");
  return joined.length > 25 ? joined.slice(0, 25) + "..." : joined;
}

export const getWhoisData = async (req: Request, res: Response) => {
  const { domain, type } = req.body;

  if (!domain || !type) {
    return res.status(400).json({ error: "Domain and type are required" });
  }

  try {
    const response = await axios.get(CONFIG.WHOIS_BASE_URL, {
      params: {
        apiKey: CONFIG.WHOIS_API_KEY,
        domainName: domain,
        outputFormat: "JSON",
      },
    });

    const whoisRecord = response.data?.WhoisRecord;
    const registryData = whoisRecord?.registryData || {};

    if (!whoisRecord) {
      return res.status(404).json({ error: "No WHOIS data found" });
    }

    let result: Record<string, string> = {};

    if (type === "domain") {
      result = {
        "Domain Name": registryData.domainName || domain,
        Registrar: registryData.registrarName || "N/A",
        "Registration Date": registryData.createdDate || "N/A",
        "Expiration Date": registryData.expiresDate || "N/A",
        "Estimated Domain Age":
          registryData.estimatedDomainAge?.toString() || "N/A",
        Hostnames: registryData.nameServers?.hostNames
          ? formatHostnames(registryData.nameServers.hostNames)
          : "N/A",
      };
    } else if (type === "contact") {
      const registrant = registryData.registrant || {};
      const technical = registryData.technicalContact || {};
      const admin = registryData.administrativeContact || {};

      result = {
        "Registrant Name": registrant.name || "N/A",
        "Technical Contact Name": technical.name || "N/A",
        "Administrative Contact Name": admin.name || "N/A",
        "Contact Email": registrant.email || "N/A",
      };
    } else {
      return res
        .status(400)
        .json({ error: "Invalid type. Use 'domain' or 'contact'." });
    }

    return res.json(result);
  } catch (error: any) {
    console.error("WHOIS API error:", error.message);
    return res.status(500).json({ error: "Failed to fetch WHOIS data" });
  }
};
