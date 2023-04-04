export const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-800 text-white p-4 min-h-screen">
      <section className="max-w-5xl m-auto">
        {children}
      </section>
    </div>
  );
};
