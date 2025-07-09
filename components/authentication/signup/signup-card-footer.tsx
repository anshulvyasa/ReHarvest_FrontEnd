import Link from "next/link";

export default function SignUpCardFooter() {
  return (
    <p className="text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link href="/sign-in" className="font-medium text-green-700 hover:underline">
        Log in
      </Link>
    </p>
  );
}