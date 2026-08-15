import {
	NagpurmartCustomer,
	NagpurmartRider,
	NagpurmartSeller,
	NagpurmartWeb,
} from "@/assets/images/projects/nagpurmart";

import {
	Groome1,
	Groome2,
	Groome3,
	Groome4,
	GroomeApp1,
	GroomeApp2,
	GroomeApp3,
	GroomeApp4,
	GroomeApp5,
	GroomeAdmin1,
	GroomeAdmin2,
	GroomeAdmin3,
} from "@/assets/images/projects/groome";

import { Nsh1, Nsh2, Nsh3, Nsh4, Nsh5 } from "@/assets/images/projects/nsh";

import {
	Banner,
	Crusto1,
	Crusto2,
	Crusto3,
	Crusto4,
	Crusto5,
	Crusto6,
} from "@/assets/images/projects/crusto";

import {
	Banner as CRBanner,
	CR1,
	CR2,
	CR3,
} from "@/assets/images/projects/car-rental";

import { StaticImageData } from "next/image";
import {
	VS1,
	VS2,
	VS3,
	VS4,
	VS5,
	VS6,
	VS7,
	VS8,
	VS9,
	VS10,
} from "@/assets/images/projects/verigrow-solar";

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
			NagpurmartWeb,
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
			GroomeApp1,
			GroomeApp2,
			GroomeApp3,
			GroomeApp4,
			GroomeApp5,
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
		banner: Nsh1,
		images: [Nsh1, Nsh2, Nsh3, Nsh4, Nsh5],
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
		banner: Banner,
		images: [Crusto1, Crusto2, Crusto3, Crusto4, Crusto5, Crusto6],
	},
	{
		id: "car-rental",
		title: "Premium Car Rental",
		subtitle: "Premium car rental and booking mobile application",
		description:
			"A Flutter-based car rental application that lets users browse premium vehicles, compare rental options, view detailed vehicle information, and manage bookings through a streamlined mobile experience.",
		details: [
			"Premium vehicle browsing with rental rates, mileage, and fuel information",
			"Vehicle selection interface for comparing available cars and rental options",
			"Detailed vehicle information with customer and location details",
			"Rental history and booking information for managing active and previous rentals",
			"Responsive mobile-first UI designed for a smooth and intuitive booking experience",
		],
		impact:
			"Built a complete mobile car rental experience covering vehicle discovery, comparison, booking workflows, and rental information in a polished Flutter application.",
		tags: ["Flutter", "Dart", "Mobile Development"],
		banner: CRBanner,
		images: [CR1, CR2, CR3],
	},
	{
		id: "verigrow-solar",
		title: "Verigrow Solar",
		subtitle: "Solar energy solutions and rooftop inspection platform",
		description:
			"A modern solar energy website designed to help customers explore solar solutions, estimate potential savings, and request free rooftop inspections through a conversion-focused experience.",
		details: [
			"Lead-generation workflow for collecting customer details and scheduling free rooftop inspections",
			"Solar bill calculator for helping customers evaluate potential savings and system requirements",
			"Product, package, and project showcases for exploring available solar solutions",
			"Responsive landing page with clear calls to action, promotional offers, and customer-focused information",
			"Integrated contact and inquiry flows designed to simplify the transition to rooftop solar",
		],
		impact:
			"Built a conversion-focused solar platform that combines product discovery, savings estimation, and lead generation into a streamlined customer experience.",
		tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
		banner: VS1,
		images: [VS1, VS2, VS3, VS4, VS5, VS6, VS7, VS8, VS9, VS10],
	},
];
