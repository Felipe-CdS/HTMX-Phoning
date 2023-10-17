import { html } from 'hono/html'

export const Layout = (props: { children: any }) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.3"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Hono + htmx</title>
    </head>
    <body>
      <div class="p-2 flex flex-col" id="messages-home"> 
		${props.children}
      </div>
    </body>
  </html>
`

export function NavbarComponent() {
	return(
		<div class="bg-teal-500 w-100 flex justify-around">
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Home</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Explore</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Notifications</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Messages</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Lists</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Bookmarks</button>	
			<button class="py-2 mr-2 font-bold text-lg text-white hover:text-teal-600">Communities</button>	
		</div>
	);
}
export function ButtonComponent() {
	return(
			<div hx-target="this" hx-swap="outerHTML">
			<div><label>First Name</label>: Joe</div>
			<div><label>Last Name</label>: Blow</div>
			<div><label>Email</label>: joe@blow.com</div>
			<button hx-get="/contact/1/edit" 
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Click To Edit
			</button>
			</div>
	);
}

export function FormComponent() {
	return(
			<form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
			<div>
			<label>First Name</label>
			<input type="text" name="firstName" value="Joe"/>
			</div>
			<div class="form-group">
			<label>Last Name</label>
			<input type="text" name="lastName" value="Blow"/>
			</div>
			<div class="form-group">
			<label>Email Address</label>
			<input type="email" name="email" value="joe@blow.com"/>
			</div>
			<button hx-post="" 
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
				Submit
			</button>
			<button hx-get="/contact/1" 
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Cancel
			</button>
			</form>
		  );
}

export function MessageBubbleSingleRowComponent({message, time}: any) {
	return(
		<div class="self-start flex mb-2">

			<div class="border border-black rounded-full w-5 h-5 mr-1">

			</div>

			<div class="flex items-end">
				<div class="border rounded-r-xl rounded-b-xl border-black px-2 py-1 mr-1 bg-gradient-to-t from-green-400 via-green-400">
					<span class="whitespace-pre-line text-base">{message} </span>
				</div>
				<span class="text-xs">{time} </span>
			</div>
		</div>
	);
}

export function MessageBubbleDoubleRowComponent({messageKR, messageTrans, time}: any) {
	return(
		<div class="self-start flex flex-col mb-2">

			<span class="text-sm ml-6">민지</span>

			<div class="flex">
				<div class="border border-black rounded-full w-5 h-5 mr-1">

				</div>

				<div class="flex items-end">

						<div class="flex flex-col border rounded-r-xl rounded-b-xl border-black mr-1 bg-gradient-to-t from-green-400 via-green-400">
							<span class="whitespace-pre-line text-base px-2 py-1">{messageKR} </span>
							<hr class="border border-black border-opacity-50 border-dashed my-1"/>
							<span class="whitespace-pre-line text-base px-2 py-1">{messageTrans} </span>
						</div>
					
					<span class="text-xs">{time} </span>
				</div>
			</div>
		</div>
	);
}

export function SendMessageBarComponent(){
	return(
		<div class="w-100 bg-yellow-300 p-2 border-t border-black">
			<form class="inline-block px-3 py-1 border border-black rounded-full bg-white"
					hx-post="/messages" hx-target="#messages-home" hx-swap="outerHTML">

				<input class="mr-2 focus:outline-none" name="message-text-input"
						type="text" placeholder="Enter a message.">
				</input>
				<button class="btn">Enviar</button>
			</form>
		</div>
	)
}

