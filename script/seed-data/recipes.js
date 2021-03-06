const {Recipe} = require('../../server/db/models')

const tequilaSoda = {
  name: 'Tequila Soda',
  description:
    'Fill a glass with ice and add 2oz of tequila. $Top with club soda. $Optionally: add a squeeze of lime or grapefruit.',
  imageURL:
    'https://2cookinmamas.com/wp-content/uploads/2017/03/Sparkling-Tequila-Cocktail-square.jpg'
}
const vodkaSoda = {
  name: 'Vodka Soda',
  description:
    'Fill a glass with ice and add 2oz of vodka. $Top with club soda. $Optionally: add a squeeze of lime or lemon.',
  imageURL:
    'https://www.homewetbar.com/media/catalog/product/cache/265d7bf611d39b8f80e93d32d7319b33/8/1/8142-marquee-vodka-and-soda-rocks-glass_1.jpg'
}
const vodkaOnTheRocks = {
  name: 'Vodka on the Rocks',
  description:
    'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of vodka. $Optionally: Garnish with lemon zest.',
  imageURL:
    'https://realwines.ch/wp-content/uploads/2018/07/stock-photo-glass-of-vodka-on-the-rocks-with-lemon-80006044.jpg'
}
const tequilaOnTheRocks = {
  name: 'Tequila on the Rocks',
  description:
    'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of tequila. $Optionally: Garnish with lime zest.',
  imageURL:
    'https://www.liquor.com/thmb/nheYWv4aOciafqol4DcqkAQN0kU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__13093600__OldFashion-720x720-18de0d8d98ed4bb3881455dd94ebc13d.jpg'
}
const moscowMule = {
  name: 'Moscow Mule',
  description:
    'Pour 1.5 oz of vodka and 0.5 oz lime juice into a mug. $Add ice cubes and ginger beer. $Optionally: Drop a lime wedge in the mug for garnish.',
  imageURL:
    'https://www.liquor.com/thmb/W7rZCGQTShuKl5-loQO5LiZzh9k=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2020__01__02085936__cbd-moscow-mule-720x720-recipe-10d6f1fa45084faf9e542e3fc2119236.jpg'
}
const oldFashioned = {
  name: 'Old Fashioned',
  description:
    'Stir sugar, bitters, and 2 tablespoons of warm water in a rocks glass until most of the sugar is dissolved. $Add 3 ice cubes and pour over 2 oz bourbon. $Stir for 20 seconds. $Garnish with orange wedge. $Optionally: you can also garnish with a cherry.',
  imageURL:
    'https://i.guim.co.uk/img/media/688a59514e251771b6c66fb3d3bf8f7b6e9cae00/985_1329_3722_3721/master/3722.jpg?width=300&quality=85&auto=format&fit=max&s=2eaa9ba581cf7c548c0ca7387023825f'
}
const ginTonic = {
  name: 'Gin and Tonic',
  description:
    'Fill glass with ice. $Pour in 2 oz Gin. $Fill with tonic water. $Optionally: garnish with a lime.',
  imageURL:
    'https://www.platingsandpairings.com/wp-content/uploads/2019/04/spanish-gin-and-tonic-9-500x500.jpg'
}
const daquiri = {
  name: 'Daquiri',
  description:
    'Shake 2oz rum, 0.5 oz simple syrup and 1 oz fresh lime juice over ice. $Pour into a coup glass and serve straight up. ',
  imageURL:
    'https://i2.wp.com/dishesdelish.com/wp-content/uploads/2018/08/Classic-Daiquiri-Square-3.jpg'
}
const whiskeySour = {
  name: 'Whiskey Sour',
  description:
    'Combine whiskey, lemon juice, and simple syrup in a cocktail shaker. $Fill with shaker with ice, cover, and shake vigorously for about 20 seconds. $Strain cocktail into a glass filled with ice. $Optionally: garnish with orange wheel and cherry.',
  imageURL:
    'https://assets.bonappetit.com/photos/57acc14e53e63daf11a4d9b6/1:1/w_1536,h_1536,c_limit/whiskey-sour.jpg'
}
const darkStormy = {
  name: 'Dark and Stormy',
  description:
    'Fill glass with ice. $Add rum, and then top with ginger beer. $Squeeze in, and then garnish with lime wedge.',
  imageURL:
    'https://www.liquor.com/thmb/e5U_ixZzKIComkO9okCMkXMwUNE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dark-and-stormy-720x720-recipe-95f288ed6697444ab3301f8670b4564e.jpg'
}
const negroni = {
  name: 'Negroni',
  description:
    'Stir 1oz dry gin, 1oz sweet vermouth, and 1 oz Campari with ice for 20 seconds. $Optionally: garnish with orange peel.',
  imageURL:
    'https://www.liquor.com/thmb/F-OeHvMRiQ55Pn2CNi802lvesaQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2012__05__dutch-negroni1-ff0b79c2e60547bebc17d43901907f82.jpg'
}
const ginMartini = {
  name: 'Gin Martini',
  description:
    'Add 2 oz gin, 1 oz dry vermouth and ice into shaker. $Stir (do not shake) for about 10 seconds. $Strain into coup glass. $Optionally: garnish with lemon peel and olive.',
  imageURL:
    'https://www.liquor.com/thmb/TsF4e-mKzswG7aWNAHGudvVM3s4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__06__11135226__Lighten-Up-with-These-4-Riffs-on-the-Reverse-Vodka-Martini-720x720-article-17fc332e6ab54dba8b0193cebae29a52.jpg'
}
const vodkaMartini = {
  name: 'Vodka Martini',
  description:
    'Add 2 oz vodka, 1 oz dry vermouth and ice into shaker. $Stir (do not shake) for about 10 seconds. $Strain into coup glass. $Optionally: garnish with lemon peel and olive.',
  imageURL:
    'https://www.liquor.com/thmb/SAWLaMg8mlwccCqsBRdF9aHLsMw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__05093330__dry-martini-720x720-recipe-8a80821c4ca944849690af8cda90cc03.jpg'
}
const manhattan = {
  name: 'Manhattan',
  description:
    'Stir whiskey, vermouth, and bitters with cracked ice. $Strain into a chilled coup. $Garnish with orange peel and or brandied cherry.',
  imageURL:
    'https://www.liquor.com/thmb/LBcDyZrIonkctc20L93gMvn-jvQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23135055__Frank-Magnasco_Drink1-14cf380c1c9f46e98f26346faef699d0.jpg'
}
const sidecar = {
  name: 'Sidecar',
  description:
    'Twist the rim of a coupe into a plate of sugar so it attaches to the rim of the glass. $Add Cognac, orange liqueur, and lemon juice into a cocktail shaker with ice and then shake until chilled. $Strain into sugar-rimmed coupe and garnish with an orange peel.',
  imageURL:
    'https://stevethebartender.com.au/wp-content/uploads/2014/12/sidecar-cocktail-recipe.jpg'
}
const ginGimlet = {
  name: 'Gin Gimlet',
  description:
    'Shake 2 oz gin and 2/3 oz lime juice with cracked ice. $Strain into a chilled cocktail glass.',
  imageURL:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fclassic-vodka-gimlet-xl-recipe2017.jpg'
}
const vodkaGimlet = {
  name: 'Vodka Gimlet',
  description:
    'Shake 2 oz vodka and 2/3 oz lime juice with cracked ice. $Strain into a chilled cocktail glass.',
  imageURL:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fclassic-vodka-gimlet-xl-recipe2017.jpg'
}
const margarita = {
  name: 'Margarita',
  description:
    'Rub a lime wedge over the edge of a rocks glass (or Margarita glass) then twist it on a plate of coarse salt so that it attaches. $Shake tequila, orange liqueur, and lime juice in a shaker with cracked ice. $Strain in a glass over ice.',
  imageURL:
    'https://www.liquor.com/thmb/HzYcHscHlBK0Dj5M6eJOb5M9YjQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23134943__Margarita-720x720-recipe-v2-6dc3213825c94a9cb6d7ce1818ce6e31.jpg'
}
const champagneCocktail = {
  name: 'Champagne Cocktail',
  description:
    'Add 2 dashes of bitter and a sugar cube into a champagne flute. $Add cognac followed by gently pouring chilled champagne. $Optionally: a lemon twist over top.',
  imageURL:
    'https://www.liquor.com/thmb/tpMbjzlnrR7Os8izw21_foqRozc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/champagne-cocktail-720x720-primary-cd701e31bfb94e4ebee029eb37cbda2f.jpg'
}
const whiteRussian = {
  name: 'White Russian',
  description:
    'Fill an old fashioned glass with ice. $Pour in vodka, coffee liqueur, and cream. $Stir until combined.',
  imageURL:
    'https://www.liquor.com/thmb/Xk0R_GXBXilIevvXulgxxgho0yo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-russian-720x720-article-edf9724ecfc84d56bc90f390d53d6f85.jpg'
}
const mojito = {
  name: 'Mojito',
  description:
    'Place mint leaves and one lime wedge into a sturdy glass. $Use a muddler to crush the mint and lime. $ Add 2 more lime wedges and the sugar, and muddle again. Do not strain the mixture. $Fill the glass almost to the top with ice. $Pour the rum over the ice, and fill the glass with carbonated water. $Stir and garnish with remaining lime wedge.',
  imageURL:
    'https://www.artofdrink.com/wp-content/uploads/2010/08/how-to-make-a-mojito-recipe-720x720.jpg'
}
const water = {
  name: 'Water',
  description: 'Drink. $More. $Water.',
  imageURL:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-water-in-drinking-glass-on-wooden-table-royalty-free-image-1592838592.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=480:*'
}
const whiskeyOnTheRocks = {
  name: 'Whiskey on the Rocks',
  description:
    'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of whiskey.',
  imageURL: 'https://www.wemu.org/sites/wemu/files/201412/Rocks_Glass.jpg'
}
const bourbonOnTheRocks = {
  name: 'Bourbon on the Rocks',
  description:
    'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of bourbon whiskey.',
  imageURL:
    'https://www.liquor.com/thmb/ArBw0h1rErHVi23k4LqH0ytSVF8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2011__01__bourbon-on-the-rocks-6b509947c1884da6b077cad71bdb5c91.jpg'
}
const americano = {
  name: 'Americano',
  description:
    'Pour 1.5 oz Campari and 1.5 oz sweet vermouth into a rocks or highball glass filled with ice. $Add the club soda. $Optionally garnish with an orange twist.',
  imageURL:
    'https://www.liquor.com/thmb/BeSLdsxQ2pCBDtYVK0Z2hOmDdAs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__18075612__americano-720x720-article-50171f19cc644b05b8df563e06a647fd.jpg'
}
const hotToddy = {
  name: 'Hot Toddy',
  description:
    'In a teapot or saucepan, bring 3/4 cup of water to a boil. $Pour the hot water into a mug. $Add the whiskey, 2 tsp honey, and 2 tsp lemon juice. $Stir until the honey has disappeared into the hot water. $Taste, and add 1 teaspoon honey for more sweetness, and/or 1 teaspoon more lemon juice for more zing. $Optinally: Garnish with a lemon round and cinnamon stick (if using). Enjoy!',
  imageURL:
    'https://www.liquor.com/thmb/OfDRO-d6EAg63y23aR2t-0mlR8k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hot-toddy-720x720-primary-f04e0c5aa93b40889529338c41fc6242.jpg'
}
const mimosa = {
  name: 'Mimosa',
  description:
    'Pour desired amount of champagne into glass or pitcher. $Top with orange juice.',
  imageURL:
    'https://www.liquor.com/thmb/EQydLxfKp9uDonWNF-ToOQZ_HWA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mimosa-720x720-primary-e800c18fccc94252ab7925df84bf5215.jpg'
}
const bloodyMary = {
  name: 'Bloody Mary',
  description:
    'Salt the rim of a tall glass. $In a cocktail mixer full of ice, combine the vodka, vegetable juice, Worcestershire sauce, hot pepper sauce, salt and pepper. $Shake vigorously and strain into the glass. $Optionally: Garnish with a stalk of celery and olives stuck onto a toothpick.',
  imageURL:
    'https://www.liquor.com/thmb/JQp6y1xoOGVmZrViBZNBXVt9JPk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__09__01105541__classic-bloody-mary-720x720-recipe-22e93e6d3426461fa89ffc946640c58c.jpg',
  source: 'https://www.liquor.com/recipes/classic-bloody-mary/'
}
const sparklingCampariOrange = {
  name: 'Sparkling Campari Orange Cocktail',
  description:
    'Fill a glass with ice. $Add an ounce of Campari. $Add two ounces of orange juice. $Add an ounce of sparkling water. $Watch all the colours mix and swirl and sparkle!',
  imageURL:
    'https://www.liquor.com/thmb/lZruC6rn5jdkDYsgX4d8RETKprY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__01__30141023__Make-It-Count-720x720-recipe-b2033942d9714401b81f57ff16d6e017.jpg',
  source: 'https://www.imagelicious.com/blog/sparkling-campari-orange-cocktail'
}
const tomColins = {
  name: 'Tom Collins',
  description:
    'Add the gin, lemon juice and simple syrup into a Collins glass. $Fill with ice, top with club soda and stir. $Optionally: Garnish with a lemon wheel and maraschino cherry.',
  imageURL:
    'https://www.liquor.com/thmb/4SIABFe9XWJ0VmHSsksaRmrIpuc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__03080950__Tom-Collins-720x720-recipe-e87bf7954cdb4438b5e8d21f568cdd6f.jpg',
  source: 'https://www.liquor.com/recipes/tom-collins-2/'
}
const whiskeyPunch = {
  name: 'Whiskey Sour Party Punch',
  description:
    'In a large bowl or pitcher, combine all ingredients except the Sprite. Stir well. $Chill and add Sprite before serving. $Optional: Add sliced lemons and oranges.',
  imageURL:
    'https://static.onecms.io/wp-content/uploads/sites/9/2015/11/WHISKEY1115-XL-fwx-cocktail-whiskey-punch.jpg'
}

async function seedRecipes() {
  await Recipe.create(americano)
  await Recipe.create(bloodyMary)
  await Recipe.create(bourbonOnTheRocks)
  await Recipe.create(champagneCocktail)
  await Recipe.create(darkStormy)
  await Recipe.create(daquiri)
  await Recipe.create(ginTonic)
  await Recipe.create(ginMartini)
  await Recipe.create(ginGimlet)
  await Recipe.create(hotToddy)
  await Recipe.create(manhattan)
  await Recipe.create(margarita)
  await Recipe.create(mimosa)
  await Recipe.create(mojito)
  await Recipe.create(moscowMule)
  await Recipe.create(negroni)
  await Recipe.create(oldFashioned)
  await Recipe.create(sidecar)
  await Recipe.create(sparklingCampariOrange)
  await Recipe.create(tequilaOnTheRocks)
  await Recipe.create(tequilaSoda)
  await Recipe.create(tomColins)
  await Recipe.create(vodkaGimlet)
  await Recipe.create(vodkaMartini)
  await Recipe.create(vodkaOnTheRocks)
  await Recipe.create(vodkaSoda)
  await Recipe.create(whiskeyOnTheRocks)
  await Recipe.create(whiskeySour)
  await Recipe.create(whiskeyPunch)
  await Recipe.create(whiteRussian)
  await Recipe.create(water)
}

module.exports = seedRecipes
