"use client"
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { downloadConfig } from './content';

export const handleDownloadAll = async () => {
  const zip = new JSZip();

  try {
    const filePromises = downloadConfig.files.map(async (file) => {
      // Em um app real, você faria um fetch para a URL do arquivo
      // Para este placeholder, criamos um arquivo de texto simples
      const content = `Este é um placeholder para ${file.name}. Substitua a URL em src/lib/content.ts para o arquivo real.`;
      zip.file(file.name, content);
    });

    await Promise.all(filePromises);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, downloadConfig.zipFileName);
    });
  } catch (error) {
    console.error("Erro ao criar o arquivo ZIP:", error);
    alert("Ocorreu um erro ao tentar baixar os arquivos. Por favor, tente novamente.");
  }
};
