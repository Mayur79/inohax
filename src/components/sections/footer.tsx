import React from "react";
import LinkArrow from "./linkArrow";


function Footer() {
	return (
		<footer className="mt-5 w-full border-t border-2 border-zinc-800/30 flex flex-col items-center justify-center gap-4 px-4 py-6 text-sm text-zinc-500 text-center">
			<p className="mb-2">© 2024 Inohax 1.0</p>
			<div className="flex flex-col gap-3 md:flex-row md:gap-5 justify-center my-2">
				<a
					className="group/mail flex items-center"
					target="_blank"
					href="mailto:inovacteam@gmail.com"
				>
					Contact
					<LinkArrow classname="group-hover/mail:opacity-100 opacity-0 transition hidden md:block" />
				</a>
				<a
					className="group/community flex items-center"
					target="_blank"
					href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo"
				>
					Join Inovact Community
					<LinkArrow classname="group-hover/community:opacity-100 opacity-0 transition hidden md:block" />
				</a>
			</div>
			<p className="mt-2 text-xs text-zinc-400">
				For any queries, feel free to contact Shubham at <a href="https://wa.me/919818273220" target="_blank" rel="noopener noreferrer" className="text-blue-500">Contact - +91 98182 73220</a>
			</p>
		</footer>
	);
}

export default Footer;
