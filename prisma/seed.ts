/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ingredient, Prisma, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const user = {
    email: 'user@user.com',
    password: bcrypt.hashSync('useruser', 12),
    name: 'User User',
  };

  await prisma.user.create({ data: user });
  console.log(
    '\x1b[1m',
    '\x1b[32m',
    '✔️ New user created successfully 🥳 ',
    '\x1b[0m',
  );
  console.log({ ...user, password: 'useruser' });

  const admin: Prisma.UserCreateInput = {
    email: 'user@admin.com',
    password: bcrypt.hashSync('useradmin', 12),
    name: 'User Admin',
    role: 'ADMIN',
  };
  await prisma.user.create({ data: admin });
  console.log(
    '\x1b[1m',
    '\x1b[32m',
    '✔️ New admin user created successfully 🥳 ',
    '\x1b[0m',
  );
  console.log({ ...admin, password: 'useradmin' });

  async function createIngredient(ingredient: string) {
    return await prisma.ingredient.create({ data: { name: ingredient } });
  }

  async function createItem(
    name: string,
    categoryId: string,
    image: string,
    price: number,
    ingredients: Ingredient[],
  ) {
    const ingredientsIds = ingredients.map((ingredient) => ({
      id: ingredient.id,
    }));

    return await prisma.item.create({
      data: {
        name: name,
        price: price,
        categoryId: categoryId,
        image: image,
        ingredients: { connect: ingredientsIds },
      },
    });
  }

  const hamburgerCategory = await prisma.category.create({
    data: { name: 'hamburger' },
  });

  const drinkCategory = await prisma.category.create({
    data: { name: 'drink' },
  });

  const additionalCategory = await prisma.category.create({
    data: { name: 'additional' },
  });

  const pao = await createIngredient('pão');
  const maionese = await createIngredient('maionese');
  const alface = await createIngredient('alface');
  const tomate = await createIngredient('tomate');
  const cebola = await createIngredient('cebola');
  const ketchup = await createIngredient('ketchup');
  const mostarda = await createIngredient('mostarda');
  const molho = await createIngredient('molho King');
  const molhoFurioso = await createIngredient('molho furioso');
  const picles = await createIngredient('picles');
  const queijo = await createIngredient('queijo');
  const cheddar = await createIngredient('cheddar fatiado');
  const molhoCheddar = await createIngredient('molho cheddar');
  const hamburguer = await createIngredient('hambúrguer bovino');
  const bacon = await createIngredient('bacon');
  const frango = await createIngredient('filé de frango');
  const chocolate = await createIngredient('chocolate');
  const batata = await createIngredient('batata');
  const chicken = await createIngredient('KB Chicken');
  const sorvete = await createIngredient('sorvete');
  const refrigerante = await createIngredient('refrigerante');
  const suco = await createIngredient('suco natural');
  const cha = await createIngredient('chá');

  //----

  const chaLimao = await createItem(
    'Lipton Limão',
    drinkCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/lipton-lim%C3%A3o-thumb.png',
    200,
    [cha],
  );

  const chaPessego = await createItem(
    'Lipton Pêssego',
    drinkCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/lipton-lim%C3%A3o-thumb.png',
    200,
    [cha],
  );

  const pepsi = await createItem(
    'Pepsi',
    drinkCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Pepsi-thumb_2021-09-20-103453_kyav.png',
    200,
    [refrigerante],
  );

  const sucoLaranja = await createItem(
    'Suco natural de laranja',
    drinkCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Natural_One_Laranja_thumb_639x324.png',
    200,
    [suco],
  );

  const sucoUva = await createItem(
    'Suco natural de uva',
    drinkCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Natural_One_Uva_thumb_639x324.png',
    200,
    [suco],
  );

  //----

  const molhoFuriosoPote = await createItem(
    'Molho Furioso',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Blister-Furioso-thumb-cupom-m-d_2022-07-22-131828_qoeg.png',
    200,
    [molhoFurioso],
  );

  const trioFurioso = await createItem(
    'Trio Furioso',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Trio-Supremo-2.png',
    1290,
    [cebola, batata, chicken, molhoFurioso],
  );

  const casquinha = await createItem(
    'Casquinha',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Blister-Furioso-thumb-cupom-m-d_2022-07-22-131828_qoeg.png',
    200,
    [sorvete],
  );

  const onionRings = await createItem(
    'Onion Rings',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Onion-Rings-thumb_2021-09-16-164850_zyvn.png',
    890,
    [cebola],
  );

  const batataFrita = await createItem(
    'Batata frita',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Frita.png',
    700,
    [batata, bacon, molhoCheddar],
  );

  const batataSuprema = await createItem(
    'Batata Suprema',
    additionalCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Suprema-thumb_2021-09-16-164200_tqnf.png',
    1590,
    [batata],
  );

  //----

  const megaStacker3 = await createItem(
    'Mega Stacker Atômico 3.0',
    hamburgerCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Mega-Stacker-Ato%CC%82mico-3.0.png',
    3390,
    [pao, hamburguer, queijo, bacon],
  );

  const bigKing = await createItem(
    'Big King',
    hamburgerCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Big-King.png',
    990,
    [pao, maionese, alface, cebola, molho, cheddar, picles],
  );

  const chickeCrispy = await createItem(
    'Chicken Crispy',
    hamburgerCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/BK-Chicken-Crispy-interna.png',
    2090,
    [pao, frango, maionese, alface],
  );

  const whooper = await createItem(
    'Whooper',
    hamburgerCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/whopper-thumb.png',
    2490,
    [
      pao,
      maionese,
      alface,
      tomate,
      cebola,
      ketchup,
      picles,
      queijo,
      hamburguer,
    ],
  );

  const cheeseburgerDuplo = await createItem(
    'Cheeseburger Duplo',
    hamburgerCategory.id,
    'https://d3sn2rlrwxy0ce.cloudfront.net/Cheeseburger_duplo-thumb.png',
    990,
    [pao, mostarda, picles, queijo, hamburguer],
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
