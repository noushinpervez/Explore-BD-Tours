const Breadcrumb = ({ tour }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-5 border-b border-border hidden md:block">
      <ol className="flex items-center gap-1 text-gray-600 max-w-screen-xl mx-auto px-2">
        {/* Home link */ }
        <li>
          <a href="#" className="text-primary">
            <span>Home</span>
          </a>
        </li>

        {/* Separator */ }
        <li className="mx-2.5 text-border">•</li>

        {/* City link */ }
        <li>
          <a href="#" className="text-primary">
            { tour.location.city }
          </a>
        </li>

        {/* Separator */ }
        <li className="mx-2.5 text-border">•</li>

        {/* Tour name link */ }
        <li>
          <a href="#" className="text-link">
            { tour.name }
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;