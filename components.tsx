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
      <div> 
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
