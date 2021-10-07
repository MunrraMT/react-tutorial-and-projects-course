import { links } from './data';

const Sidebar = () => (
  <aside>
    <h4>Sidebar</h4>

    <section className="links-container show-container">
      <ul className="links">
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </ul>
    </section>
  </aside>
);

export default Sidebar;
