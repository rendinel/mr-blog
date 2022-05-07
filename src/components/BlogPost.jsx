import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { VscCircleFilled } from "react-icons/vsc"

export const BlogPost = props => {
  const { post, isHero } = props
  return (
    <Link
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
      <Stack spacing="8">
        <Box overflow="hidden">
          <Image
            src={post.image}
            alt={post.title}
            width="full"
            height={useBreakpointValue({
              base: "15rem",
              md: isHero ? "sm" : "15rem",
            })}
            objectFit="cover"
            transition="all 0.2s"
            _groupHover={{
              transform: "scale(1.05)",
            }}
          />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Text>{post.author.name}</Text>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text> {post.publishedAt}</Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {post.title}
            </Heading>
            {/* <Text color="muted">{post.excerpt}</Text> */}
            <Text color="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              blanditiis quasi sint reprehenderit sunt mollitia natus nemo
              molestiae tenetur odio? Temporibus mollitia nobis facilis! Nisi
              maiores distinctio dignissimos minus labore. Dolorum temporibus
              ipsum ea impedit minima odio quis voluptates, adipisci, aut illum
              perspiciatis? Eaque omnis debitis quasi inventore et, voluptatibus
              nihil. Assumenda mollitia ipsam neque eveniet exercitationem,
              facere quisquam sapiente. Maiores, recusandae iusto tempora dolore
              deserunt tempore nihil nulla iure ratione minima, at accusamus,
              rerum culpa quia nisi distinctio hic impedit illum blanditiis!
              Quasi, harum vitae et magnam tempore repellendus. Corporis tenetur
              molestiae odio repellat delectus temporibus doloribus ipsum
              voluptatibus dignissimos assumenda quod accusantium, nam, quos
              quasi ad voluptate adipisci nisi in dolore numquam libero
              perspiciatis eius! Quo, distinctio dolorum? Consequuntur dolor
              quos eaque eius enim magni, ut, qui eum quia at, quidem illum nemo
              ad eveniet temporibus possimus culpa unde? Suscipit veritatis
              dolor necessitatibus ea, illo nobis reprehenderit in. Rerum
              repellendus eius iure at consequuntur nobis, cupiditate, error
              expedita delectus fugit culpa excepturi quasi porro aspernatur
              temporibus veritatis totam quibusdam ratione soluta inventore?
              Quae quis officiis dignissimos fugit quaerat? Modi nulla eaque
              cupiditate, necessitatibus ducimus, laboriosam odio assumenda
              similique quam iste iure, provident aut quidem et blanditiis
              facilis vel exercitationem odit soluta nam. Earum voluptatibus
              ducimus voluptatem quisquam tenetur. Possimus dignissimos quo
              obcaecati, maxime iusto officiis omnis repudiandae in odit ipsam,
              nesciunt tenetur labore recusandae sapiente laborum dolore
              aperiam, nobis repellendus consequatur. Pariatur eius aperiam ex
              sint nulla maiores. Sapiente, impedit porro soluta qui, asperiores
              eos repellendus perspiciatis facilis possimus dolores error
              corrupti amet reprehenderit nisi voluptas iure ratione quod,
              temporibus obcaecati fuga nam nulla eaque? Eligendi, id maiores!
              Ea aspernatur dolor harum eaque tempore consequuntur quae,
              nesciunt cumque magni quisquam accusantium ipsa temporibus
              deleniti distinctio. Ratione eos quae ab ipsa accusamus? Hic
              accusantium molestiae quo obcaecati ullam odio? Dicta, cum
              temporibus in esse consectetur nisi repudiandae molestiae
              veritatis possimus eius praesentium labore accusamus aspernatur
              quisquam assumenda eos quo aliquam? Sint eaque autem, ipsa error
              vitae iste dolores quia! Minima, architecto. Sit, numquam! Saepe
              voluptatum adipisci est hic sint culpa mollitia neque obcaecati
              veritatis? Sit quis, aspernatur alias officiis cupiditate ut
              earum. Eum necessitatibus, inventore atque sed voluptates id?
              Velit sunt reiciendis fugiat ipsam corporis! Ipsam fugiat eaque
              quos illum atque consectetur pariatur, nihil deserunt harum
              debitis fugit tempora eum obcaecati exercitationem nam sint
              facilis perspiciatis eveniet necessitatibus molestias! Fuga labore
              sapiente, cupiditate quibusdam quis placeat debitis itaque
              voluptates? Non voluptatum, natus repellendus quas inventore nisi
              voluptatibus quam minus? Obcaecati ab cumque architecto saepe
              blanditiis non adipisci modi laudantium! Amet facilis mollitia
              obcaecati ut exercitationem nulla, aperiam veritatis? Est,
              impedit. Quod voluptatibus nostrum commodi et nobis. Quaerat,
              accusamus recusandae facere ratione beatae laudantium consequatur,
              sed unde doloribus, est itaque. Voluptas voluptates officiis
              soluta repellendus asperiores. Officia veniam delectus possimus
              eligendi fugit aliquam debitis perspiciatis rerum ipsam expedita,
              accusamus enim soluta porro dignissimos quae hic cupiditate
              praesentium vitae, voluptate ex! Dolor, quas. Odio aliquid vero
              consequuntur, odit asperiores quod modi aspernatur repellendus
              nihil, illum cumque facere natus enim, fuga ipsum unde ducimus cum
              atque rem! Illum repellat consequatur facere dolorum! Delectus
              quasi temporibus, quas voluptas sed eligendi et adipisci quibusdam
              nostrum debitis? Unde dolorum non vel facere quasi autem alias,
              impedit quam necessitatibus? Iste blanditiis ducimus, nemo ab quo
              maxime! Nesciunt nihil, ea voluptatem iusto praesentium, ad soluta
              amet quia ratione eligendi odio ab molestias sequi aliquid,
              facilis mollitia deserunt recusandae magnam cupiditate! Sequi
              reprehenderit beatae dignissimos ea nam fugiat? Consequatur dolor
              totam adipisci excepturi cupiditate nam in vero, nesciunt minima
              distinctio quae hic animi dolores, illum accusantium veritatis quo
              dignissimos quisquam nostrum doloribus. Expedita soluta
              consectetur ratione doloremque nihil. Quam amet reprehenderit,
              esse iusto aliquam ad numquam vel eos ullam, expedita, quos
              voluptate? Quae maxime aut error dolore minima unde architecto
              consequatur doloribus reprehenderit, placeat hic omnis quod
              ratione! Dolores aut eveniet aspernatur! Odio veritatis quis
              repellat magni iure, temporibus velit nesciunt id recusandae, et
              ab consectetur atque ea porro maxime nobis quo eveniet tenetur
              officia est consequatur facere. Velit quae temporibus iusto earum
              recusandae est aspernatur laborum reprehenderit cupiditate eius
              perspiciatis et vel suscipit itaque adipisci eaque vitae tenetur
              laudantium atque sequi pariatur modi, saepe tempore. Hic,
              perferendis! Sed similique maiores expedita nobis, hic, suscipit
              eaque in modi voluptas ipsa repellendus dolor id doloremque quae.
              Veniam illo, laudantium repudiandae deleniti animi asperiores
              facilis, sunt labore, laborum autem amet. Sapiente dolorum minus
              ab dolor officiis laudantium nam voluptate illo, aspernatur
              dolores! Laborum officiis adipisci architecto asperiores omnis
              explicabo dolorem nam, qui nesciunt temporibus ducimus quod sit
              voluptatum id odio. Laudantium tempore quibusdam aliquam minus
              odio, iusto sint temporibus esse eveniet numquam ad. Ad ab
              doloremque impedit. Quaerat eius, deserunt harum veritatis
              aspernatur quia esse ea praesentium commodi, quas facilis!
              Consequatur quae qui earum ad, magni modi fugit porro officiis
              esse! Minus at natus, dolores vitae blanditiis, accusamus quaerat
              quibusdam ea, similique eius dolorum incidunt minima porro fuga
              tempore ducimus! Porro dignissimos possimus accusantium
              consectetur quo blanditiis perspiciatis, quibusdam eaque sapiente
              reprehenderit molestias ducimus totam vel eum doloremque aut
              laborum hic? Adipisci facilis quaerat itaque, sint cum blanditiis
              maxime amet? Corporis inventore excepturi explicabo sapiente
              nostrum obcaecati maiores pariatur ipsam incidunt libero,
              praesentium suscipit cupiditate facere accusamus alias voluptate
              reiciendis aspernatur, distinctio beatae reprehenderit dolores.
              Voluptas debitis repudiandae natus sunt. Dignissimos, distinctio?
              Saepe maiores id eos laborum! Sunt possimus officiis, quasi ad
              iusto incidunt odit blanditiis veniam? Itaque libero, nihil
              numquam dicta recusandae quaerat architecto repudiandae qui animi
              quasi molestias. Sapiente tempore rerum illo sequi ex, omnis
              nesciunt cumque quae assumenda eligendi tempora asperiores,
              voluptate aliquid. Quod deleniti laborum quos nesciunt, quo beatae
              perferendis cupiditate consequatur, suscipit minus minima
              quisquam! Culpa voluptatibus maxime dolore quod molestias modi,
              enim minima voluptas inventore placeat? Nam vero exercitationem
              repellat corrupti odio laudantium error unde, consequatur,
              perferendis eaque, corporis dicta debitis. Eum, ipsa eos?
              Asperiores vero libero quam natus cum, iusto consequatur inventore
              ex ullam voluptatibus autem, nam dignissimos illum dolorum
              accusamus quas odio, laboriosam quia corporis sequi. Hic nihil
              dolor dolorum. Fugiat, aperiam! Impedit nisi culpa obcaecati
              repellendus nostrum, asperiores architecto doloribus, praesentium
              consequatur incidunt itaque suscipit, error dicta! Sequi fugit
              non, nam ab autem tenetur quaerat quas alias praesentium, sit
              obcaecati? Eius. Architecto ab sit adipisci similique hic dicta
              eos soluta? Ipsum molestiae doloremque corporis. Obcaecati culpa
              deserunt inventore facilis? Cumque, qui suscipit ratione obcaecati
              enim vel? Enim sapiente nostrum delectus animi? Eius molestias
              delectus perferendis cumque ipsam perspiciatis temporibus possimus
              quidem, nostrum facere, maiores doloremque, quibusdam facilis
              voluptate odit autem aspernatur expedita dolores. Earum in
              mollitia harum sed sequi laudantium veniam. Iusto, rem illo ad
              ratione dignissimos enim, magni reiciendis consequatur totam
              incidunt cum consequuntur. Qui repellendus modi error et mollitia
              voluptate. A minus in cumque distinctio quasi. Cumque, aliquid at.
              Accusantium, sunt nihil. Quo eveniet ipsam, voluptate non impedit
              voluptatum, voluptatibus ad odio iste nemo mollitia facere veniam
              sint recusandae quidem excepturi dolorum aut. Accusantium quod
              dignissimos velit enim quasi? Delectus soluta iusto, non vero
              autem doloribus, similique provident doloremque modi expedita
              eaque illum eos inventore nemo earum numquam. A dolores voluptatem
              maiores excepturi reprehenderit dolorem aliquid aperiam,
              laboriosam atque? Hic necessitatibus dolorum facere voluptas
              facilis odit, aperiam in deleniti, minima mollitia delectus qui
              animi amet deserunt quae quos voluptatibus. Minus maxime similique
              reiciendis, perspiciatis ratione veritatis sequi. Amet, nam. Animi
              dicta itaque pariatur tenetur, ad nostrum ducimus cum quia nulla
              at neque eius magni esse consequatur exercitationem laborum
              sapiente, repellendus, in totam adipisci consequuntur dignissimos
              autem? Porro, deserunt fugit. In rem eveniet voluptas ratione
              totam nihil vero aspernatur. Inventore voluptate id incidunt
              consequuntur quos ducimus ullam modi iusto eligendi laborum
              perferendis ea dolores, quidem aliquid similique consectetur magni
              ipsum! Ipsa unde veniam, esse nulla nihil sequi minus eaque optio
              earum et iste ab magni ut non voluptatibus impedit nesciunt quia
              illum facilis alias at dolores minima quam hic. Distinctio.
              Nostrum cum sed optio? Repellat quos voluptas culpa aliquam odio
              libero facere, illum autem a. Fugit, reprehenderit doloribus at
              amet modi voluptate sint cum quidem placeat repellat sapiente, sit
              nostrum? Ratione perferendis quidem quam aut suscipit reiciendis
              repellendus dolorem perspiciatis quis qui officia aspernatur fuga
              minima mollitia magnam hic natus quia, minus itaque quas. Adipisci
              sequi necessitatibus rem quam voluptate. Placeat mollitia autem
              iure culpa aliquam facilis at harum non inventore! Nobis
              molestiae, sequi dolor, obcaecati mollitia voluptas neque
              provident, totam cum laboriosam esse voluptatibus necessitatibus
              quibusdam incidunt delectus eaque! Vero ducimus ex laboriosam,
              fugiat minus provident quisquam laborum. Eum facere enim hic
              rerum? Delectus, alias ducimus esse aspernatur sit a odio corporis
              nulla sint obcaecati ratione, sunt magnam laboriosam! Earum
              repudiandae perspiciatis minima repellat, adipisci hic commodi
              consequuntur blanditiis tenetur inventore aut unde. Aspernatur
              tenetur, reprehenderit maxime esse ad deleniti, nisi rerum
              facilis, sit consectetur iusto sint repellat nemo? Facere
              voluptates cum distinctio, suscipit placeat aut nisi velit,
              pariatur consectetur ea ut delectus architecto nam nostrum dolorem
              sit eos accusamus ex excepturi eaque doloremque fugiat quas? Sunt,
              libero eum. Harum amet eligendi voluptatem. Iusto architecto
              reiciendis atque placeat incidunt vitae quo, illo eveniet eius,
              aut a molestias repellendus accusantium alias numquam repellat
              amet quae ad minima? Velit, officiis illum. Obcaecati consequatur,
              quae libero earum reprehenderit odit alias necessitatibus, nulla
              sunt facere ipsa fugiat labore magnam assumenda! Odit,
              reprehenderit eligendi amet velit dolorem ab culpa magni ipsum
              cum, mollitia ea. Dolore temporibus ipsa doloribus laudantium,
              expedita accusamus saepe doloremque est explicabo aspernatur
              ratione soluta tempore laboriosam facilis quae vero maxime labore
              consequuntur nostrum obcaecati natus. Recusandae temporibus ex
              atque incidunt. Amet a sint vitae perferendis, facilis error
              dolorum beatae sit at. Temporibus, numquam. Sit consequuntur id
              nostrum laudantium magni rerum placeat accusamus quibusdam.
              Quaerat, numquam unde. Magni voluptate ut asperiores. Assumenda
              perspiciatis minima animi nam sequi consequuntur dignissimos qui,
              in rem porro possimus amet repellat quam laudantium harum
              explicabo maiores quibusdam! Dolorum molestiae sint maxime
              doloremque odio repellendus illum dolorem! Quis ipsam ab possimus
              eius voluptatibus, tempore similique doloribus necessitatibus esse
              optio iure, laborum sit incidunt! Doloremque quaerat, qui sed
              ullam quisquam officia magnam, aliquid dolorum accusamus possimus,
              aut nesciunt? Distinctio dicta ipsam eius, voluptas cupiditate
              molestiae vero, porro vitae inventore exercitationem debitis nisi.
              Delectus vel aspernatur tempore minima veritatis ad laborum,
              voluptates doloremque. Aliquid ex iure provident ratione dolore.
              Sit nostrum natus repellendus atque, exercitationem corporis
              voluptatum, deleniti tempora, aut ducimus ullam. Hic aut, magni
              laudantium distinctio quasi odit consequuntur corrupti pariatur
              enim dolor necessitatibus quam, quos ipsam laboriosam. Sunt
              perspiciatis accusamus minima beatae ullam. Eius officia iure
              inventore quod, reprehenderit, voluptate quas eligendi delectus
              optio labore quis? Non totam dolor aspernatur veritatis velit quod
              minus odit voluptate labore. Quia, sapiente illo? In officiis
              cumque, animi quae impedit dolorem id officia, veritatis ex, at
              quibusdam sapiente nulla? Iusto amet sit, veritatis nihil dolores
              itaque numquam nulla quos neque explicabo? Magnam quas blanditiis
              delectus officia similique numquam optio qui eos velit, nesciunt,
              commodi, odio consectetur? Provident, eligendi? Beatae vel atque
              aut iure maiores, corporis, optio sequi molestias voluptatibus cum
              dolorum! Ex labore minus consectetur non perferendis amet velit ut
              eligendi, maiores vitae quos impedit maxime cupiditate laborum
              totam saepe odit, aliquam explicabo delectus! Ad tenetur modi
              molestias? Commodi, totam incidunt? Dolores minima earum optio
              iste. Voluptate, corrupti! Aspernatur ratione ab commodi at illo
              unde libero repudiandae, voluptate voluptas consectetur ad
              recusandae magni cumque hic laboriosam maxime sit vero ex laborum.
              Iure similique nisi quis fugit ipsa corporis blanditiis, autem
              maiores laudantium, sequi, magni dolor. Delectus explicabo
              aliquam, quos vel blanditiis ad cupiditate dolore aliquid ipsam
              inventore dicta ut cumque labore. Natus exercitationem dicta
              voluptatum expedita ad magnam laboriosam numquam iure
              necessitatibus, quia ipsa doloribus officia reiciendis architecto
              perferendis omnis magni? Hic eum, consequatur excepturi facilis
              blanditiis labore aperiam nisi delectus! Vel ipsam ullam quae
              incidunt est iure cum impedit repellendus temporibus tempore non
              esse accusamus veritatis modi soluta at, neque aliquid odit
              voluptate consectetur consequatur velit perferendis dolores
              recusandae. Aliquam. Consequatur aliquid totam voluptatum tempore
              inventore aspernatur fugiat, perspiciatis officiis consectetur
              praesentium distinctio nam itaque aut recusandae tenetur id
              provident dolor esse aliquam rerum sequi odit? Repellat, rerum
              laudantium. Rerum. Perferendis quaerat ducimus quo, quibusdam eius
              natus sunt. Necessitatibus impedit aperiam cum! Voluptates nihil
              animi totam mollitia, doloribus et quis nam quia aliquid? Quos
              eaque ducimus repellat ullam hic labore. Quos nisi odio molestiae
              fugit, at aliquam quis, doloremque eius error totam assumenda
              labore? Quisquam debitis vel sint, est fuga itaque, tempore modi
              voluptatibus voluptate impedit, eligendi minima quo. Corporis!
              Possimus accusantium saepe aliquam ducimus doloremque? Cum
              excepturi laborum accusamus nemo beatae accusantium consectetur
              rem, recusandae aliquid, minus, et dolorem! Illum, voluptatibus
              ipsum. Placeat, accusantium? Officia ut impedit non nemo. Labore
              debitis harum at vero minus deleniti, laborum nostrum quae minima
              esse maxime qui aspernatur officiis earum excepturi eum blanditiis
              eveniet dignissimos velit nisi quod reprehenderit assumenda!
              Rerum, molestias sint. Illo suscipit vitae ipsam, dolore ea cumque
              consectetur distinctio rerum saepe facere reiciendis reprehenderit
              qui incidunt veritatis obcaecati corrupti. Quod exercitationem
              nobis quas. Ex harum reiciendis quidem amet magnam repudiandae.
              Modi eaque facilis magnam. Iste, dolorem sint in est optio quaerat
              nihil doloremque id repudiandae facilis quibusdam debitis, ab
              tempora porro! In ipsam aut enim nihil assumenda earum. Corrupti,
              perspiciatis. Quaerat quisquam, commodi tempore dolorem laborum
              perferendis nostrum culpa omnis adipisci aliquid exercitationem
              obcaecati esse, magnam, aspernatur alias. Explicabo, quisquam
              cumque adipisci in suscipit modi! Eum voluptatum omnis eaque illo?
              Molestias veritatis aspernatur ducimus minima est qui iure aperiam
              totam, dolores sit alias dolorum suscipit iste officia quaerat
              culpa error ipsam nobis corporis ullam cumque. Molestiae optio
              sapiente pariatur quo? Placeat reprehenderit animi qui quidem
              maiores. Ut et aliquam odio! Necessitatibus, deserunt suscipit
              repudiandae, itaque quae fuga provident rem veniam eligendi ea
              voluptas perspiciatis tempore consequuntur nisi commodi animi
              similique. Quibusdam dolorem possimus cum, quae dignissimos magnam
              quos quis similique adipisci aliquid, minima dolorum eveniet
              dolore iure. Ipsam pariatur fuga assumenda. Mollitia soluta
              nesciunt eaque! Eaque similique consequatur fuga nulla?
              Repellendus asperiores voluptatum maxime nam dolore magni nihil
              eligendi sunt aliquid. Mollitia, illo quibusdam? Voluptate quia
              reiciendis perspiciatis eos possimus, facilis non, repellendus
              atque autem voluptatibus minima consequuntur placeat voluptatem.
              Dolorum, sint amet. Facilis animi commodi unde mollitia a laborum
              perferendis quas perspiciatis quo corrupti! Laudantium blanditiis
              fuga veniam voluptatem fugit expedita voluptas esse, architecto
              perspiciatis eligendi impedit totam accusantium? Asperiores
              obcaecati reiciendis rerum! Aliquid dolorum rem eaque architecto
              earum soluta doloribus, ipsa aperiam odio nostrum aspernatur.
              Quibusdam cum vero quidem, voluptatum quod repellendus hic. At
              possimus rerum velit molestias! Nobis corporis, beatae quis
              obcaecati vitae odit nostrum numquam, error hic cupiditate minima?
              Deserunt in debitis nulla aliquam ut perferendis aut, fugit
              molestiae aspernatur sint. Voluptas recusandae distinctio nostrum
              inventore. Accusamus natus quasi ab similique nihil veniam debitis
              laborum, tenetur odio ipsa non maxime at optio esse autem hic
              sequi eaque delectus soluta cumque laudantium? A quidem iure error
              nostrum. Repellat, rem ab libero non officiis fuga harum quam,
              facere eos reprehenderit enim voluptatem ratione? Tempore ducimus
              voluptatem ipsa sint est. Necessitatibus voluptatem fugit quaerat
              enim saepe praesentium omnis fugiat. Omnis, velit perspiciatis cum
              qui animi facilis dicta, totam minus labore pariatur et ipsam
              reiciendis blanditiis magnam doloribus maxime vel alias fugit
              itaque ut temporibus amet facere, corporis unde! Necessitatibus.
              Consequatur, ad. Assumenda neque dolorem magni quas nobis
              exercitationem eveniet sunt, inventore, asperiores perferendis
              cupiditate debitis voluptatem sit perspiciatis excepturi modi
              aperiam vitae ea voluptates, laudantium accusamus! Soluta,
              officiis officia. Earum consectetur omnis rem id fugiat, saepe
              sed, corrupti quis suscipit aut quas ad quisquam ipsa iure
              provident quaerat eius voluptas rerum? Aspernatur maxime suscipit,
              et commodi repudiandae ullam quia. Recusandae mollitia aperiam
              deserunt? Vel perferendis quos quaerat modi nulla quis
              reprehenderit maxime ea aspernatur illum deleniti atque reiciendis
              nesciunt hic eveniet earum ex doloribus, fugiat, dolores
              blanditiis! Fugit, ut! Consectetur quia voluptatum odit voluptas
              hic amet voluptatibus, adipisci earum tempora omnis doloremque
              eius minus molestiae aliquam cum quam harum fuga voluptatem!
              Tenetur, nesciunt voluptatum dolore ipsam consequuntur a sit?
              Laudantium mollitia veniam deserunt fugit dignissimos eaque
              doloremque voluptatum molestiae earum saepe porro ex, aliquam
              maxime quos minima nam, cupiditate aperiam ea iure? A ratione
              quasi, obcaecati laboriosam omnis sed. Esse adipisci dolorem ad
              odit blanditiis tempore voluptatem temporibus, eveniet distinctio
              quisquam ullam, fugiat et libero, id vitae aut illum natus at
              beatae ex dolor sed. Odio harum autem vel. Maxime molestias,
              inventore sit tempora id esse sint. Ipsam quibusdam facilis
              architecto, vitae minima quasi natus, nihil modi necessitatibus,
              distinctio nisi veniam dolor similique culpa error! Quo mollitia
              at eum! Assumenda hic voluptatum voluptate excepturi repudiandae,
              mollitia explicabo debitis animi adipisci quasi cumque accusantium
              modi doloremque aperiam soluta repellendus saepe. Impedit incidunt
              quod placeat, a quo cumque? Numquam, animi ut? Alias deserunt
              officia corrupti labore maxime odit ad nesciunt architecto?
              Numquam ut accusantium nulla atque sapiente aspernatur soluta
              excepturi. Dolor molestiae esse quibusdam, tenetur quo eaque
              officiis officia ut sunt! Provident qui corrupti aliquam.
              Reiciendis, atque excepturi. Alias, saepe numquam. Deserunt
              quisquam unde a veritatis? Et velit quia placeat officiis dolor
              reprehenderit, consequatur saepe enim voluptatem vel odio beatae
              fugit! Nihil quaerat fuga eaque libero saepe consectetur doloribus
              natus. Ad quis, reiciendis saepe consequatur aspernatur impedit
              ipsum! Id repellat aliquam quam minima ea, sapiente vel
              reprehenderit et provident, voluptatem repellendus! Pariatur ad
              similique sit facilis animi magni est earum obcaecati nemo,
              mollitia quasi ab aut sed delectus, totam architecto dignissimos
              ut, illum voluptate fugiat provident libero? Deserunt aut ea quam!
              Doloribus distinctio, quia saepe ratione soluta ipsa! Assumenda,
              amet nam optio minus totam dolor ducimus quidem recusandae
              exercitationem voluptates cumque. Perferendis sit autem fugit
              dolorem tempore dolores eveniet alias nisi. Beatae dicta officiis
              vel est nesciunt corporis autem pariatur ipsam repellendus natus
              deleniti, quibusdam provident quod fugiat eius excepturi minus
              quos quia necessitatibus ullam maiores nisi cumque et cupiditate?
              Eos. Minima sint labore nihil facere odit hic, ab harum soluta
              neque. Dolore corporis quae molestias perferendis quia odio,
              veritatis odit dolorum nobis, officia laudantium! Culpa, dolore?
              Earum beatae totam ea. Illo itaque laboriosam eos et commodi
              aliquid architecto tenetur eum impedit, molestias autem quaerat
              amet excepturi modi nostrum earum repellat recusandae porro illum
              praesentium repellendus. Nulla in quos labore laborum. Rerum,
              repudiandae recusandae dolores, inventore voluptates et deserunt
              enim fugiat alias totam voluptate earum delectus pariatur
              perferendis cupiditate, dignissimos error neque beatae nesciunt?
              Voluptas sint aliquid blanditiis officia, fugit totam.
            </Text>
          </Stack>
          <HStack>
            {post.tags.map((tag, id) => (
              <Badge key={id} colorScheme={tag.color}>
                {tag.label}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Link>
  )
}
