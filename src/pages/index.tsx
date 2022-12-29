import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="fixed top-0 left-0">
      <div>Home</div>
      <div>
        <Link to="book/introduce">1과 하러 가기</Link>
      </div>
    </div>
  );
}
