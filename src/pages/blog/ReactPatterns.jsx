import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import SayHello from '../../components/SayHello';
import CTASection from '../../components/CTASection';

const ReactPatterns = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        <section className="py-6 px-6 border-b border-text-tertiary/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">React Patterns 2026</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light serif-heading mb-6 leading-tight">
              React Patterns I Wish I Knew Earlier
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-text-tertiary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white">SA</div>
                <div>
                  <div className="font-semibold">Shelvin Akamuran</div>
                  <div className="text-sm text-text-tertiary">Full-Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2"><Calendar size={16} />November 5, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />14 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-indigo-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚛️</div>
                  <p className="text-text-tertiary">React Patterns</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I wasted six months writing messy React code before discovering these patterns. Now my components are cleaner, more reusable, and actually make sense when I revisit them months later. Here are the patterns that transformed how I write React.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Custom Hooks: Your Secret Weapon</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Custom hooks let you extract component logic into reusable functions. I used to copy-paste the same useEffect logic across components. Now I write it once.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Before (Repeated Logic):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  // Same logic in 10 other components...
}`}</code>
                </pre>

                <p className="text-sm text-text-tertiary mt-6 mb-2">After (Custom Hook):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}

// Now in any component:
function UserProfile() {
  const { user, loading, error } = useUser();
  // Clean!
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Compound Components Pattern</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                This pattern lets you create components that work together while keeping the API clean. Think of how select and option work together.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`// Accordion component
function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: index === openIndex,
          onClick: () => setOpenIndex(index)
        })
      )}
    </div>
  );
}

function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

// Usage - Beautiful API:
<Accordion>
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
</Accordion>`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Render Props vs Hooks</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Render props were big before hooks. Now hooks are usually better, but render props still have uses.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">When to Use Hooks:</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li>Sharing stateful logic between components</li>
                <li>Side effects (data fetching, subscriptions)</li>
                <li>Accessing context</li>
                <li>90% of cases</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">When Render Props Still Win:</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li>Need different rendering based on state</li>
                <li>Building library components</li>
                <li>Complex conditional rendering</li>
              </ul>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Context + Hooks for State Management</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                You don't always need Redux. Context + useReducer handles most cases.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`// Create context + reducer
const ThemeContext = createContext();

function themeReducer(state, action) {
  switch(action.type) {
    case 'TOGGLE':
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { dark: false });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// Usage in any component:
function Header() {
  const { state, dispatch } = useTheme();
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE' })}>
      {state.dark ? '🌙' : '☀️'}
    </button>
  );
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Component Composition Over Props</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Instead of passing tons of props, compose components together.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Bad (Prop Drilling Hell):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-red-400">{`<Card
  title="User"
  subtitle="Active"
  avatarUrl="/avatar.jpg"
  showBadge={true}
  badgeColor="green"
  showActions={true}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>`}</code>
                </pre>

                <p className="text-sm text-text-tertiary mt-6 mb-2">Good (Composition):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`<Card>
  <Card.Header>
    <Card.Avatar src="/avatar.jpg" />
    <Card.Title>User</Card.Title>
    <Card.Badge color="green">Active</Card.Badge>
  </Card.Header>
  <Card.Actions>
    <Button onClick={handleEdit}>Edit</Button>
    <Button onClick={handleDelete}>Delete</Button>
  </Card.Actions>
</Card>`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Container/Presentational Pattern</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Separate data logic from presentation. Makes components easier to test and reuse.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`// Container (Logic)
function UserListContainer() {
  const { users, loading } = useUsers();
  
  if (loading) return <Spinner />;
  return <UserList users={users} />;
}

// Presentational (UI Only)
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Real-World Example: useLocalStorage</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Here's a custom hook I use in every project. It syncs state with localStorage.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage:
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  // Works exactly like useState, but persists!
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Key Takeaways</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <ol className="list-decimal list-inside space-y-3 text-text-secondary">
                  <li><strong className="text-white">Extract repeated logic into custom hooks</strong> - DRY applies to React too</li>
                  <li><strong className="text-white">Use compound components for related UI</strong> - Clean API, flexible usage</li>
                  <li><strong className="text-white">Prefer composition over complex props</strong> - More flexible, easier to read</li>
                  <li><strong className="text-white">Separate logic from presentation</strong> - Easier testing, better reusability</li>
                  <li><strong className="text-white">Context + hooks beats Redux for most apps</strong> - Less boilerplate, same power</li>
                </ol>
              </div>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "Good React code isn't about being clever—it's about being clear. These patterns make your code clear."
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['React', 'Patterns', 'Best Practices', 'Hooks', 'Components'].map(tag => (
                <span key={tag} className="px-4 py-2 glass-light rounded-full text-sm">{tag}</span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-text-tertiary/10">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Share this article:</span>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Twitter size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Linkedin size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Facebook size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Share2 size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

    </>
  );
};

export default ReactPatterns;