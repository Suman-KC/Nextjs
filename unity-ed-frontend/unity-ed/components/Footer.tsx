export default function Footer() {
  return (
    <footer className="mt-12 bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold">UnityEd</div>
          <p className="text-sm">Empowering education through interactive learning</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="text-sm space-y-1">
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>Data Policy</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Connect</div>
          <div className="text-sm">—</div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">© 2025 UnityED by Company E. All rights reserved.</div>
    </footer>
  );
}
