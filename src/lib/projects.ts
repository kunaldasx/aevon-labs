import NagpurmartCustomer from "@/assets/images/nagpurmart-customer.png";
import NagpurmartSeller from "@/assets/images/nagpurmart-seller.png";
import NagpurmartRider from "@/assets/images/nagpurmart-rider.png";
import NagpurmartWebsite from "@/assets/images/nagpurmart-web.png";
import Groome1 from "@/assets/images/groome-1.png";
import Groome2 from "@/assets/images/groome-2.png";
import Groome3 from "@/assets/images/groome-3.png";
import Groome4 from "@/assets/images/groome-4.png";
import GroomeAdmin1 from "@/assets/images/groome-admin-1.png";
import GroomeAdmin2 from "@/assets/images/groome-admin-2.png";
import GroomeAdmin3 from "@/assets/images/groome-admin-3.png";
import NSH1 from "@/assets/images/nsh-1.png";
import NSH2 from "@/assets/images/nsh-2.png";
import NSH3 from "@/assets/images/nsh-3.png";
import NSH4 from "@/assets/images/nsh-4.png";
import NSH5 from "@/assets/images/nsh-5.png";
import Crusto1 from "@/assets/images/crusto-1.png";
import Crusto2 from "@/assets/images/crusto-2.png";
import Crusto3 from "@/assets/images/crusto-3.png";
import Crusto4 from "@/assets/images/crusto-4.png";
import Crusto5 from "@/assets/images/crusto-5.png";
import Crusto6 from "@/assets/images/crusto-6.png";
import { StaticImageData } from "next/image";

export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	details: string[];
	impact: string;
	tags: string[];
	banner: string | StaticImageData;
	images: string[] | StaticImageData[];
}

export const PROJECTS: Project[] = [
	{
		id: "nagpurmart",
		title: "NagpurMart",
		subtitle: "End-to-end quick commerce platform",
		description:
			"A multi-surface quick commerce platform connecting customers, sellers, riders, and administrators through dedicated applications and a unified backend.",
		details: [
			"Customer app and website for product discovery, cart, checkout, and order tracking",
			"Seller app for catalog, inventory, pricing, and order management",
			"Rider app for delivery assignments and real-time order tracking",
			"Admin panel for managing users, sellers, riders, products, orders, and platform operations",
		],
		impact:
			"Built a complete multi-role commerce ecosystem with real-time order and delivery workflows.",
		tags: [
			"Flutter",
			"Next.js",
			"React",
			"NestJS",
			"PostgreSQL",
			"Redis",
			"Razorpay",
			"Firebase",
		],
		banner: NagpurmartCustomer,
		images: [
			NagpurmartCustomer,
			NagpurmartSeller,
			NagpurmartRider,
			NagpurmartWebsite,
		],
	},
	{
		id: "groome",
		title: "Groome",
		subtitle: "Salon discovery and booking platform",
		description:
			"A salon marketplace that helps customers discover and book salons while giving salon owners the tools to manage bookings, customers, appointments, staff, payments, and marketing.",
		details: [
			"Customer platform for discovering salons, exploring services, and booking appointments",
			"Salon management platform for bookings, customers, appointments, staff, and payments",
			"Admin dashboard for managing salons, users, bookings, and platform operations",
		],
		impact:
			"Connected salon businesses with customers through a unified discovery, booking, and management platform.",
		tags: ["Flutter"],
		banner: Groome1,
		images: [
			Groome1,
			Groome2,
			Groome3,
			Groome4,
			GroomeAdmin1,
			GroomeAdmin2,
			GroomeAdmin3,
		],
	},
	{
		id: "natureshade-herbals",
		title: "NatureShade Herbals",
		subtitle: "E-commerce platform for an Ayurvedic wellness brand",
		description:
			"A modern e-commerce website for NatureShade Herbals, enabling customers to discover, explore, and purchase Ayurvedic and herbal wellness products online.",
		details: [
			"Product catalog with categories, product details, and search",
			"Shopping cart and streamlined checkout experience",
			"Responsive storefront designed around the brand's natural wellness identity",
			"Content sections for educating customers about products and the brand",
		],
		impact:
			"Created a complete digital storefront for selling NatureShade Herbals products online.",
		tags: [
			"Next.js",
			"React",
			"NestJS",
			"MySQL",
			"Redis",
			"Razorpay",
			"Firebase",
		],
		banner: NSH1,
		images: [NSH1, NSH2, NSH3, NSH4, NSH5],
	},
	{
		id: "crusto",
		title: "Crusto",
		subtitle: "Full-stack pizza ordering and delivery platform",
		description:
			"A full-stack pizza delivery platform with customizable pizza building, real-time order tracking, dynamic pricing, inventory management, secure payments, and an advanced administration dashboard.",
		details: [
			"Custom pizza builder with dynamic pricing based on selected ingredients",
			"Real-time order tracking with customer and administrative order workflows",
			"Inventory management with automated availability and low-stock detection",
			"Redis and BullMQ background workers for pricing and inventory processing",
			"Admin dashboard for orders, inventory, analytics, and platform management",
		],
		impact:
			"Built a complete food-delivery workflow spanning customer ordering, payments, inventory, background processing, and administration.",
		tags: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB",
			"Redis",
			"BullMQ",
			"Razorpay",
		],
		banner: Crusto1,
		images: [Crusto1, Crusto2, Crusto3, Crusto4, Crusto5, Crusto6],
	},
];
