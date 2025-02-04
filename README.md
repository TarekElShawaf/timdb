# TIMDB - Online Movies Website

## Steps to Run the Project

1. **Install dependencies**: Run the following command:
   ```
   bun install
   ```
2. **Run the development server**: Use this command:
   ```
   bun dev
   ```
3. **Access the website**: Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Introduction

**TIMDB** is an online movies website that allows users to:

- Explore a wide variety of movies
- Search for movies
- View detailed information about each movie
- Add & remove movies from their list of favorites

---

## Challenges Faced

1. **Next.js Being Relatively New**  
   Working with upcoming and rising frameworks like Next.js has its pros and cons. They offer new solutions to make development easier and reduce boilerplate code. However, there aren't many resources or courses available to learn from.

   #### Steps to Overcome It

   To tackle this challenge, I turned to the official Next.js documentation. I found it to be an incredibly useful and thorough resource, providing clear explanations and examples that helped me understand the framework better. This experience taught me the value of well-maintained documentation and encouraged me to rely more on official sources when learning new technologies.

2. **Learning Zustand**  
   Having to learn a new state management library, Zustand, and apply it within a very short timeframe added an extra layer of difficulty to the development process.

   #### Steps to Overcome It

   Applying what I learned from the first challenge, I once again turned to the documentation, as it was one of the very limited resources that described how to use Zustand and configure it with Next.js.

3. **Finding a Suitable Movies API**  
   It wasn't easy to find an open movies API that provided the amount of data required to implement what I had in mind. This led to wasted time, as I had to replace the API I was using mid-development.

   #### Steps to Overcome It

   I temporarily paused development to shift my entire focus to searching for an appropriate API, as it is the cornerstone of the website.

---

## Solutions and Resources

To overcome most of the problems I encountered, I relied heavily on the documentation for Next.js and Zustand. These resources were incredibly illustrative and helpful in guiding me through the development process.

---

## Project Architecture

The project is built using the **App Router Architecture** on Next.js 15.

### App Folder Structure

The `app` folder consists of:

1. **Core Files**

   - `page.tsx` (root page)
   - `layout.tsx`
   - `loading.tsx`
   - `error.tsx`
   - `global-error.tsx`

2. **State Management**

   - `stores/` and `providers/` folders are used to integrate Zustand throughout the pages.
   - The `providers` folder was implemented as the Next.js documentation specifies that to use Zustand with Next.js, the entire application must be wrapped in a context provider component.

3. **Dynamic Routing**

   - `movie/[id]/` is a dynamic route that displays the movie details page.
   - The `id` is acquired from query parameters to fetch and display the corresponding movie details.

4. **Route Groups**

   - `(navbar-layout)/` route group contains the **Favorites**, **Home**, and **Search Results** pages.
   - It includes a `layout.tsx` file that adds the **Navbar** to these pages.
   - The **Movie Details Page** is excluded from this group to prevent the navbar from being included in its layout.

5. **Fonts Folder**
   - The `fonts/` folder is included in the `app/` directory.
   - While there's no strict best practice for font placement (it can be in either `app/` or `public/`), the more popular approach is to place it inside the `app/` folder.

### Other Project Directories

- **`components/`** – Contains reusable UI components.
- **`css/`** – Stores global styles and custom CSS files.
- **`lib/`** – Stores reusable functions and utilities.
- **`public/`** – Contains static images and assets.
- **`README.md`** – Project documentation.

---

## Design Decisions

1. **Minimizing the Use of Client Components**

   - I kept the number of client components to a minimum and only used them when user interaction was needed.
   - This approach helps utilize Next.js's SSR optimizations and SEO benefits while maximizing the website’s overall efficiency and performance.

2. **Separation of Reusable Functions**

   - All reusable functions are placed in `api.ts` and `formatMovieAttributes.ts`.
   - This improves **code readability** and maintains a **clean, modular structure**.

3. **Using `useEffect` Hook to Load Favorites**

   - Initially, I implemented loading favorites from local storage in the initial state, but it caused an **internal server error on the initial render** before reloading the website.
   - Unfortunately, there weren't enough resources on how to access local storage through Zustand.
   - The only suggested solution was using `persist()`, which essentially delays Zustand initialization by loading data with `useEffect` after the website has fully loaded.

4. **Exposing APIs for Demo Purposes**

   - API keys and authorization were **not** added to a `.env` file.
   - While this poses a **security threat**, they were left exposed intentionally for **demo purposes**.

5. **Enhancing SEO with Exported Metadata**

   - **Server-side components** include **exported metadata** to improve **SEO performance** and ensure better search engine indexing.

6. **Using Next.js `Image`, `Font`, and `Form` Components**
   - The **`Image`** component applies **lazy loading**, optimizing image rendering and performance.
   - The **`Font`** component optimizes font loading, improving **rendering efficiency**.
   - The **`Form`** component simplifies adding the **search query to URL parameters**, reducing boilerplate code.
