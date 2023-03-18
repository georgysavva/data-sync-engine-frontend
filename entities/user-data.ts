import { HubspotContact } from "@/entities/hubspot-contact";
import { Service } from "@/entities/service";
import { StripeCustomer } from "@/entities/stripe-customer";

export class UserData {
  service: Service;
  record: HubspotContact | StripeCustomer;
}
