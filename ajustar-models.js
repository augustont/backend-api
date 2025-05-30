const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src", "models");
const camposData = `  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },`;

fs.readdirSync(dir).forEach(file => {
  const fullPath = path.join(dir, file);

  if (
    !file.endsWith(".ts") ||
    file === "index.ts" ||
    file === "init-models.ts"
  ) return;

  let content = fs.readFileSync(fullPath, "utf-8");

  // Só ajusta se timestamps estiver como false
  if (!content.includes("timestamps: false")) return;

  // Pula se já tem os campos
  if (content.includes("created_at") && content.includes("updated_at")) return;

  const regex = /return .*?\.init\s*\(\s*{([\s\S]*?)^(\s*)},/m;
  const match = content.match(regex);

  if (!match) {
    console.log(`⚠️  Não foi possível ajustar ${file}`);
    return;
  }

  const original = match[1];
  const ident = match[2] || "  ";
  const novoBloco = original + "\n" + camposData + "\n" + ident;
  const novoConteudo = content.replace(original, novoBloco);

  fs.writeFileSync(fullPath, novoConteudo);
  console.log(`✅ Ajustado: ${file}`);
});
