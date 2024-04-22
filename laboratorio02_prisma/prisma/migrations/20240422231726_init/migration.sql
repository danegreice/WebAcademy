-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `codigo` INTEGER NOT NULL,
    `preco` DECIMAL(65, 30) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `qtdEstoque` INTEGER NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `subcategoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `dataHora` DATETIME(3) NOT NULL,
    `forma_pagamento` VARCHAR(191) NOT NULL,
    `desconto` DECIMAL(65, 30) NOT NULL,
    `cpfCliente` VARCHAR(191) NOT NULL,
    `codigoProduto` INTEGER NOT NULL,

    PRIMARY KEY (`cpfCliente`, `codigoProduto`, `dataHora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClienteEndereco` (
    `cpfCliente` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`cpfCliente`, `cep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelProduto` (
    `codigoProduto` INTEGER NOT NULL,
    `numeroSerie` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codigoProduto`, `numeroSerie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_codigoProduto_fkey` FOREIGN KEY (`codigoProduto`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_cpfCliente_fkey` FOREIGN KEY (`cpfCliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClienteEndereco` ADD CONSTRAINT `ClienteEndereco_cpfCliente_fkey` FOREIGN KEY (`cpfCliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelProduto` ADD CONSTRAINT `ModelProduto_codigoProduto_fkey` FOREIGN KEY (`codigoProduto`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
