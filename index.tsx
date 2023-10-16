import { Hono } from 'hono'
import { ButtonComponent, FormComponent, Layout, NavbarComponent } from './components';

const app = new Hono();

app.get('/contact/1/edit', async (c) => {
	return c.html(
		<FormComponent/>
	);
});

app.get('/contact/1', async (c) => {
	return c.html(
		<ButtonComponent/>
	);
});

app.put('/contact/1', async (c) => {
	return c.html(
		<ButtonComponent/>
	);
});

app.get('/', async (c) => {
  return c.html(
    <Layout>
		<NavbarComponent/>
        <h1 class="text-4xl font-bold mb-4"><a href="/">Todo</a></h1>
		<ButtonComponent/>
    </Layout>
  )
})

export default app;
