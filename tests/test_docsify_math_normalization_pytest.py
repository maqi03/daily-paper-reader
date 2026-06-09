import shutil
import subprocess
import unittest
from pathlib import Path


class DocsifyMathNormalizationNodeTest(unittest.TestCase):
    def test_node_regression_suite_passes(self):
        node = shutil.which("node")
        if node is None:
            self.skipTest("Node.js is not available")

        repo_root = Path(__file__).resolve().parents[1]
        test_path = repo_root / "tests" / "test_docsify_math_normalization.js"
        result = subprocess.run(
            [node, str(test_path)],
            cwd=repo_root,
            capture_output=True,
            text=True,
            check=False,
        )

        self.assertEqual(
            result.returncode,
            0,
            result.stdout + result.stderr,
        )
