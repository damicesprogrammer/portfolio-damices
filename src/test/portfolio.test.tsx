import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LanguageProvider } from "@/components/portfolio/language";
import { content, profile } from "@/content/portfolio";
import { Education, Header, Hero, Projects } from "@/components/portfolio/Portfolio";

function Page() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <Projects />
      <Education />
    </LanguageProvider>
  );
}

const repositoryUrl = "https://github.com/damicesprogrammer/accounts-payable-ai-copilot";

describe("Portfolio", () => {
  it("renders the hero and the featured project", () => {
    render(<Page />);
    expect(profile.name).toBe("Augusto D' Amices");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.name);
    expect(
      screen.getByRole("heading", { name: "Accounts Payable AI Copilot" }),
    ).toBeInTheDocument();
  });

  it("links the project only to its repository", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: "Source code" })).toHaveAttribute(
      "href",
      repositoryUrl,
    );
    expect(screen.queryByRole("link", { name: /details/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/certification/i)).not.toBeInTheDocument();
  });

  it("switches the copy to Portuguese", () => {
    render(<Page />);
    fireEvent.click(screen.getByRole("button", { name: "pt" }));
    expect(screen.getByText("Projeto principal")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Código-fonte" })).toHaveAttribute(
      "href",
      repositoryUrl,
    );
    expect(document.documentElement.lang).toBe("pt-BR");
  });

  it("has no placeholder content in either language", () => {
    const text = JSON.stringify(content);
    for (const placeholder of [
      "Company Name",
      "Nome da Empresa",
      "Certification",
      "certificação",
      "20XX",
      "example.com",
      "Coming soon",
      "Em breve",
    ]) {
      expect(text).not.toContain(placeholder);
    }
  });
});
