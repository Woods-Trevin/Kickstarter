from app.models import db, Project

def seed_projects():
  CleanUpNewYork = Project(
    title="Clean Up New York",
    description="Help fund a New York environmental restoration project",
    video_src='https://www.youtube.com/embed/FGQAuN1hM8g',
    image_src='https://static01.nyt.com/images/2018/08/19/nyregion/00TRASH3/00TRASH3-jumbo.jpg',
    pledge_goal=30000, current_funding=10000,
    end_date='2022 10 01', start_date='2021 10 08',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=1)
  EpicChocolateBar = Project(
    title="Epic Chocolate Bar",
    description="A chocolate bar that not only subverts but transcends the expectations of your tastebuds.",
    image_src="https://m.media-amazon.com/images/I/41HD4cvOYSL.jpg",
    pledge_goal=5000, current_funding=450,
    end_date='2023 03 03', start_date='2021 10 05',
    risks="This chocolate is uncharacteristically risky",
    user_id=3,
    tag_id=2)
  SickAlbum = Project(
    title="Sick Album",
    description="I'm endeavoring to create the greatest punk-pop-rock-jazz-R&B fusion album in the world.",
    image_src="https://f4.bcbits.com/img/a1498833612_10.jpg",
    pledge_goal=12000, current_funding=217,
    end_date='2022 03 08', start_date='2020 02 02',
    risks="There are no promises this project will come to fruition, or even be what you expect it to be.  Nonetheless, I appreciate your contributions toward the project.",
    user_id=1,
    tag_id=3)
  CookBook = Project(
    title="Vegetarian Cookbook",
    description="An innovative vegetarian cookbook for the modern home",
    image_src="https://ksr-ugc.imgix.net/assets/034/541/769/6778c4f595173de85e71edd55d915f94_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1629131952&auto=format&frame=1&q=92&s=66c7aa65dae826cd1aee88e5f7646125",
    pledge_goal = 1500, current_funding=5000,
    end_date='2022 07 28', start_date='2021 02 14',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=2)
  Salt_And_Pepper = Project(
    title="2 in 1 Salt & Pepper Grinder",
    description="Grinds both pepper and salt at the same time",
    image_src="https://ksr-ugc.imgix.net/assets/034/845/951/1a15c6f6e9b0948e74ed6f2de7349006_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1631436530&auto=format&frame=1&q=92&s=610f350a74df752280e67fc70ccce264",
    pledge_goal = 1000, current_funding = 275,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=2)
  Marshmallows = Project(
    title="Mystic's Mallows",
    description="Healthy, delicious, fun mallows",
    image_src="https://ksr-ugc.imgix.net/assets/034/616/531/c3f75a53db709c02f955dda0b8584917_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1629737019&auto=format&frame=1&q=92&s=8aa69b9f263336a8202efa67df9f4bd0",
    pledge_goal = 3000, current_funding = 2999,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=2)
  Ponomoly = Project(
    title="Ponomoly",
    description="Buy up properties and run everyone out of business",
    image_src="https://media.istockphoto.com/photos/monopoly-board-game-box-picture-id458577337?s=612x612",
    pledge_goal = 2500, current_funding = 2400,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=4)
  DD2 = Project(
    title="Dragons Dogma 2",
    description="The sequel is at last here",
    image_src="https://metro.co.uk/wp-content/uploads/2020/11/Dragons_Dogma_PS3-FOB-e2db.jpg?quality=90&strip=all",
    pledge_goal = 600000, current_funding = 327482,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=4)
  DND = Project(
    title="Dungeons and Dragons",
    description="A board game in which you roleplay as an adventurer",
    image_src="https://static01.nyt.com/images/2016/04/17/multimedia/retro-dungeons-dragons/retro-dungeons-dragons-videoSixteenByNine600-v3.jpg",
    pledge_goal = 58000, current_funding = 38000,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=4)
  Artbook = Project(
    title="SavvyArtist55's Artbook",
    description="A collection of my works drawn under my moniker",
    image_src="https://cdn.cloudflare.steamstatic.com/steam/apps/1215360/capsule_616x353.jpg?t=1584168673",
    pledge_goal = 1000, current_funding = 678,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=5)
  Sculpture = Project(
    title="Statue of David Replication Project",
    description="Mass-produced imitations of the Statue of David",
    image_src="https://thetourguy.com/wp-content/uploads/2019/05/David_Florence.jpg",
    pledge_goal = 55000, current_funding = 12345,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=5)
  Seashell = Project(
    title="Seashell Necklaces",
    description="Beautifully handcrafted seashell necklaces",
    image_src="https://passportocean.com/wp-content/uploads/2019/08/gold-seashell-necklace-min-1-510x510.png",
    pledge_goal = 5, current_funding = 2,
    end_date= '2022 01 01', start_date='2022 01 02',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=1,
    tag_id=5)

  db.session.add(CleanUpNewYork)
  db.session.add(EpicChocolateBar)
  db.session.add(SickAlbum)
  db.session.add(CookBook)
  db.session.add(Salt_And_Pepper)
  db.session.add(Marshmallows)
  db.session.add(Ponomoly)
  db.session.add(DD2)
  db.session.add(DND)
  db.session.add(Artbook)
  db.session.add(Sculpture)
  db.session.add(Seashell)


  db.session.commit()


def undo_projects():
  db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
  db.session.commit()
