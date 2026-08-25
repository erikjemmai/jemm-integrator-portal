#!/usr/bin/env python3
"""Local preview server with no-cache headers."""
import http.server
import os

PORT = 5174

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        print(fmt % args)

os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f"Jemm Integrator Portal → http://localhost:{PORT}")
http.server.HTTPServer(("", PORT), NoCacheHandler).serve_forever()
