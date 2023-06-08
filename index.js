const Discord = require("discord.js")
// made in Tapioka

const config = require("./config.json")
// made in Tapioka

const client = new Discord.Client({ 
  intents: [ 
    3276799
       ]
    });

module.exports = client
// made in Tapioka


const { QuickDB } = require("quick.db");
const db = new QuickDB();
const dc = require("discord.js");
const ms = require("ms");
const moment = require("moment");
const { JsonDatabase } = require("wio.db");
const mysql2 = require('mysql2/promise');
const db1 = new JsonDatabase({ databasePath: "./databases/myJsonRegistro.json" })
const db2 = new JsonDatabase({ databasePath: "./databases/myJsonConfig.json" })


client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})
// made in Tapioka

client.slashCommands = new Discord.Collection()

require('./handler/index.js')(client)

client.on('ready', () => {
  console.clear();
  console.log(` 🐶  | Logado com sucesso
 🐶  | Estou online em ${client.user.username}
 🐶  | Bot Completo
 🐶  | Desenvolvido por: Tapioka
  `)
})


process.on('unhandledRejection', (reason, p) => {
  console.log('❌  | Algum erro detectado')
   console.log(reason, p)
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('❌  | Vários erros encontrados')
   console.log(type, promise, reason)
});
process.on('uncaughtExceptionMonito', (err, origin) => {
  console.log('❌  | Sistema bloqueado')
   console.log(err, origin)
});
process.on('uncaughtException', (err, origin) => {
  console.log('❌  | Erro encontrado')
   console.log(err, origin)
});


client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === 'host1') {

      const modal200 = new Discord.ModalBuilder()
      .setCustomId('modal200')
      .setTitle('Local Host')
      
      const localhost10 = new Discord.TextInputBuilder()
      .setCustomId('localhost10')
      .setLabel('Local Host')
      .setMaxLength(20)
      .setMinLength(1)
      .setPlaceholder('Informe sua local host')
      .setStyle(Discord.TextInputStyle.Short)
      .setRequired(true)

      const p1 = new Discord.ActionRowBuilder().addComponents(localhost10)
      modal200.addComponents(p1)
      await interaction.showModal(modal200)

    } else if (interaction.customId === 'user100') {

        const modal201 = new Discord.ModalBuilder()
        .setCustomId('modal201')
        .setTitle('Name User')
        
        const nameuser101 = new Discord.TextInputBuilder()
        .setCustomId('nameuser101')
        .setLabel('Name User')
        .setMaxLength(20)
        .setMinLength(1)
        .setPlaceholder('Informe o nome da sua db')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
  
        const p1 = new Discord.ActionRowBuilder().addComponents(nameuser101)
        modal201.addComponents(p1)
        await interaction.showModal(modal201)

      } else if (interaction.customId === 'password1') {

        const modal202 = new Discord.ModalBuilder()
        .setCustomId('modal202')
        .setTitle('Password')
        
        const password101 = new Discord.TextInputBuilder()
        .setCustomId('password101')
        .setLabel('Password')
        .setMaxLength(20)
        .setMinLength(1)
        .setPlaceholder('Informe a password da sua DB')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
  
        const p1 = new Discord.ActionRowBuilder().addComponents(password101)
        modal202.addComponents(p1)
        await interaction.showModal(modal202)

      } else if (interaction.customId === 'namedb1') {

        const modal203 = new Discord.ModalBuilder()
        .setCustomId('modal203')
        .setTitle('Nome DataBase')
        
        const db101 = new Discord.TextInputBuilder()
        .setCustomId('db101')
        .setLabel('Name DataBase')
        .setMaxLength(20)
        .setMinLength(1)
        .setPlaceholder('Informe o nome da sua DB')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
  
        const p1 = new Discord.ActionRowBuilder().addComponents(db101)
        modal203.addComponents(p1)
        await interaction.showModal(modal203)

      }

  } if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'modal200') {

    const localhostp1 = interaction.fields.getTextInputValue('localhost10')
    await db.set(`localhostp1`, { prod: localhostp1 })

    interaction.reply({ content: `${interaction.user} | Local Host configurado com sucesso! ✅`, ephemeral: true })

    var data_id2 = Math.floor(Math.random() * 999999999999999);
    db2.set(`${data_id2}.LocalHost`, `${localhostp1}`)

  } else if (interaction.customId === 'modal201') {

    const nameuserp1 = interaction.fields.getTextInputValue('nameuser101')
    await db.set(`nameuserp1`, { prod: nameuserp1 })

    interaction.reply({ content: `${interaction.user} | Name User configurado com sucesso! ✅`, ephemeral: true })

    var data_id3 = Math.floor(Math.random() * 999999999999999);
    db2.set(`${data_id3}.NameUser`, `${nameuserp1}`)

  } else if (interaction.customId === 'modal202') {

    const passwordp1 = interaction.fields.getTextInputValue('password101')
    await db.set(`passwordp1`, { prod: passwordp1 })

    interaction.reply({ content: `${interaction.user} | Password configurado com sucesso! ✅`, ephemeral: true })

    var data_id4 = Math.floor(Math.random() * 999999999999999);
    db2.set(`${data_id4}.PassWord`, `${passwordp1}`)
    
  } else if (interaction.customId === 'modal203') {

    const namedbp1 = interaction.fields.getTextInputValue('db101')
    await db.set(`namedbp1`, { prod: namedbp1 })

    interaction.reply({ content: `${interaction.user} | Name DB configurado com sucesso! ✅`, ephemeral: true })

    var data_id5 = Math.floor(Math.random() * 999999999999999);
    db2.set(`${data_id5}.NameDB`, `${namedbp1}`)

  } 
})

// Whitelist - NÃO CONFIGURADO!!
const usersWhoClicked = {};
client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
  if (interaction.customId === 'wl1') {
    const userId = interaction.user.id;

    if (usersWhoClicked[userId]) {
      await interaction.reply({
        content: "Você já realizou sua whitelist",
        ephemeral: true
      });
    } else {
      
      const modal100 = new Discord.ModalBuilder()
      .setCustomId('modal100')
      .setTitle('Whitelist Vegas City')//mude para o nome da sua city
  
      const idjogo = new Discord.TextInputBuilder()
      .setCustomId('idjogo')
      .setLabel('Qual seu ID?')
      .setMaxLength(6)
      .setMinLength(1)
      .setPlaceholder('Informe seu id-game')
      .setStyle(Discord.TextInputStyle.Short)
  
      const nomeper = new Discord.TextInputBuilder()
      .setCustomId('nomeper')
      .setLabel('Qual seu nome?')
      .setMaxLength(20)
      .setMinLength(1)
      .setPlaceholder('Informe seu nome in-game')
      .setStyle(Discord.TextInputStyle.Short)
  
      const p1 = new Discord.ActionRowBuilder().addComponents(idjogo);
      const p2 = new Discord.ActionRowBuilder().addComponents(nomeper);
      modal100.addComponents(p1, p2)
      await interaction.showModal(modal100);
  
      usersWhoClicked[userId] = true;
    }
  }
} if (!interaction.isModalSubmit()) return;
 if (interaction.customId === 'modal100') {
  const idJogo = interaction.fields.getTextInputValue('idjogo');
  const nomePersonagem = interaction.fields.getTextInputValue('nomeper');

  const member = interaction.member;

  const novoApelido = `${idJogo} | ${nomePersonagem}`//coloque o apelido para adicionar no user
  await member.setNickname(novoApelido);

  const role = '867616181312946236'//id do cargo a adicionar ao usar após ele enviar a wl

  member.roles.add(role)

  var data_id = Math.floor(Math.random() * 999999999999999);
  db1.set(`${data_id}.idJogo`, `${idJogo}`)
  db1.set(`${data_id}.NomePersonagem`, `${nomePersonagem}`)

  const localhostDB = await db.get(`localhostp1.prod`)
  const nameuserDB = await db.get(`nameuserp1.prod`)
  const passwordDB = await db.get(`passwordp1.prod`)
  const name101DB = await db.get(`namedbp1.prod`)

  const con = mysql2.createPool({
    host: `${localhostDB}`,
    user: `${nameuserDB}`,
    password: `${passwordDB}`,
    database: `${name101DB}`,
  });
  
  con.execute(`SELECT * FROM vrp_users WHERE id = '${idJogo}'`)
    .then(([rows]) => {
      const white = rows[0].whitelisted;
      if (white == 1) {
        const sql = `UPDATE vrp_users SET whitelisted = '1' WHERE id = '${idJogo}'`;
        con.execute(sql);
      }
    })

    interaction.reply({ content: `${interaction.user} | Você fez sua whitelist com sucesso. Aguarde para fazer sua entrevista no canar ${Discord.VoiceChannel}: 867611119954690086!`, ephemeral: true })

    const emb_aprovado1 = new Discord.EmbedBuilder()
    .setColor("Random")
    .setTitle('Nova Whitelist!')
    .setDescription(`**Discord:** ${interaction.user}\n**Cidadão:** \`${nomePersonagem}\`\n**ID:** \`${idJogo}\``)
    .setFooter({ text: `Whitelist System` })

    await interaction.guild.channels.cache.get(config.canal_aprovados).send({ embeds: [emb_aprovado1] })

}
})

client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
   if (interaction.customId === 'limpar15') {

    await db.delete(`localhostp1.prod`)
    await db.delete(`nameuserp1.prod`)
    await db.delete(`passwordp1.prod`)
    await db.delete(`namedbp1.prod`)


    db2.deleteAll();
    db1.deleteAll()
    
    interaction.reply({ content: `${interaction.user} | Valores limpos com sucesso! ✅`, ephemeral: true })

  }
}
})

// Ticket
client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    let choice = interaction.values[0]
    const member = interaction.user.id
    const guild = interaction.guild
    if (choice == 'suporte1') { 

      if (interaction.guild.channels.cache.find(ca => ca.name === `suporte-${member.id}`)) {
        let canal = interaction.guild.channels.cache.find(ca => ca.name === `suporte-${member.id}`);
        
        let emb_tem1 = new Discord.EmbedBuilder()
        .setDescription(`❌ **Você já tem um ticket aberto em: ${canal}!**`)
        .setColor('Random')
      
      interaction.reply({ embeds: [emb_tem1], ephemeral: true })
      } else {
      let nome_canal = `suporte-${interaction.user.username}`
      await db.set(`nome_canal`, { prod: nome_canal })
      let categoria = client.channels.cache.get(config.categoria);
      if (!categoria) categoria = null;

      interaction.guild.channels.create({

        name: nome_canal,
        parent: categoria,
        type: Discord.ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
          },
          {
            id: interaction.user.id,
            allow: [
              Discord.PermissionFlagsBits.ViewChannel,
              Discord.PermissionFlagsBits.AddReactions,
              Discord.PermissionFlagsBits.SendMessages,
              Discord.PermissionFlagsBits.AttachFiles,
              Discord.PermissionFlagsBits.EmbedLinks
            ]
          },
        ]

      }).then( (chat) => {

        let emb_ticket1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Suporte** aberto com sucesso!`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
 
        let botao_aberto1 = new Discord.ActionRowBuilder()
        .addComponents([
         new Discord.ButtonBuilder()
         .setLabel('Ir')
         .setStyle(Discord.ButtonStyle.Link)
         .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
        ])
 
        interaction.reply({ embeds: [emb_ticket1], components: [botao_aberto1], ephemeral: true })

        let emb_aberto1 = new Discord.EmbedBuilder()
       .setColor("Random")
       .setDescription(`**Siga o modelo de suporte:**\n\n**Seu ID:\nSeu nome:\nMotivo de suporte:**\n\n**Categoria Selecionada:**\`\`\`📞 Suporte\`\`\`\n\n**Botões azuis são para a staff!**\n\n**Ticket foi aberto com sucesso, aguarde que será atendido, não a necessidade de chamar ninguém no PV!**`)

       let botao_close1 = new Discord.ActionRowBuilder()
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('fechar_ticket1')
        .setEmoji('🗝️')
        .setLabel('Fechar')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('add1')
        .setLabel('Adicionar')
        .setEmoji('➕')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
      .addComponents([
       new Discord.ButtonBuilder()
       .setCustomId('rem1')
       .setLabel('Remover')
       .setEmoji('➖')
       .setStyle(Discord.ButtonStyle.Primary)
      ])

       chat.send({ embeds: [emb_aberto1], components: [botao_close1] }).then(m => {
        m.pin()
       })
     
      })
    }
    } 
  } if (interaction.isButton) {
    if (interaction.customId === 'fechar_ticket1') {
     
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.some(role => role.name === 'adm');
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role)))  {
       
        let emb_certeza1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Olá ${interaction.user}, tem certeza que deseja fechar esse ticket?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza1 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim1')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao1')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza1], components: [botao_certeza1] })

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'add1') {

      const userRoles = interaction.member.roles.cache.map(role => role.name === 'adm');
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
        
  interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja adicionar:', ephemeral: true });

  const filter = (msg) => msg.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

  collector.on('collect', async (msg) => {
    const userId = msg.content.trim();
    const user = await interaction.guild.members.fetch(userId).catch(() => null);

    if (!user) {
      return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
    }
    interaction.channel.permissionOverwrites.create(user.id, { ViewChannel: true, SendMessages: true });

    const emb_adicionado = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Usuário adicionado ao ticket!**\n\n**Quem adicionou:** ${interaction.user}\n\n**Usuário adicionado:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    .setThumbnail(`${user.user.displayAvatarURL()}`)

    msg.reply({ embeds: [emb_adicionado] });

    const chat = interaction.channel;
    const emb_dmadd = new Discord.EmbedBuilder()
    .setTitle('Adicionado a Ticket')
    .setColor("Random")
    .setDescription(`${user.user}\n\n**Você foi adicionado a um ticket de:** \`📞 Suporte\`\n\n**Clique no botão abaixo para ser redirecionado ao ticket!**`)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

    const botao_dmadd = new Discord.ActionRowBuilder()
    .addComponents([
      new Discord.ButtonBuilder()
      .setLabel('Ir a Ticket')
      .setEmoji('<a:seta:960886390621626408>')
      .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
      .setStyle(Discord.ButtonStyle.Link)
    ])

    user.send({ embeds: [emb_dmadd], components: [botao_dmadd] })
    collector.stop();
  });
  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      interaction.reply('Tempo esgotado. Por favor, tente novamente.');
    }
  });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    } else if (interaction.customId === 'rem1') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja remover:', ephemeral: true });
    
        const filter = (msg) => msg.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
    
        collector.on('collect', async (msg) => {
          const userId = msg.content.trim();
          const user = await interaction.guild.members.fetch(userId).catch(() => null);
    
          if (!user) {
            return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
          }
          
          interaction.channel.permissionOverwrites.delete(user.id);
          
          const emb_removido = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`**Usuário removido do ticket!**\n\n**Quem retirou:** ${interaction.user}\n\n**Usuário Removido:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
          .setThumbnail(`${user.user.displayAvatarURL()}`)

          msg.reply({ embeds: [emb_removido] });

          const emb_dmrem = new Discord.EmbedBuilder()
          .setTitle('Removido de Ticket')
          .setColor("Random")
          .setDescription(`${user.user}\n\n**Você foi removido do ticket:** \`📞 Suporte\`\n\n**Staff que fechou:** \`${interaction.user.username}\`\n**ID do staff:** \`${interaction.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })

          user.send({ embeds: [emb_dmrem] })
          collector.stop();
          });
    
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            interaction.reply('Tempo esgotado. Por favor, tente novamente.');
          }
        });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    }
    else if (interaction.customId === 'nao1') {
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const message = await interaction.message.fetch();
        message.delete()

        let reaberto = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Ticket reaberto por: ${interaction.user}**`)

        interaction.reply({ embeds: [reaberto] })
        setTimeout( () => {
          interaction.deleteReply()
        }, 5000)

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'sim1') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        let emb_certeza2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**${interaction.user} | Deseja o cidadão ter acesso ao transcript?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza2 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim2')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao2')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza2], components: [botao_certeza2] })

      } else {
        interaction.reply({ content: `Você não possui permissão para fechar este ticket.`, ephemeral: true })
      }
    } else if (interaction.customId === 'sim2') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const modal = new Discord.ModalBuilder()
        .setCustomId('modal')
        .setTitle('Fechamento de Ticket')

        const motivo = new Discord.TextInputBuilder()
        .setCustomId('motivo')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid = new Discord.TextInputBuilder()
        .setCustomId('idcid')
        .setLabel('Id do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid  = new Discord.TextInputBuilder()
        .setCustomId('nomecid')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const primeira = new Discord.ActionRowBuilder().addComponents(motivo);
        const segunda = new Discord.ActionRowBuilder().addComponents(idcid);
        const terceira = new Discord.ActionRowBuilder().addComponents(nomecid);
        modal.addComponents(primeira, segunda, terceira)
        await interaction.showModal(modal);
      }
    } else if (interaction.customId === 'nao2') {
      const message = await interaction.message.fetch();
      message.delete();
  
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {
  
        const modal2 = new Discord.ModalBuilder()
        .setCustomId('modal2')
        .setTitle('Fechamento de Ticket')

        const motivo2 = new Discord.TextInputBuilder()
        .setCustomId('motivo2')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid2 = new Discord.TextInputBuilder()
        .setCustomId('idcid2')
        .setLabel('ID do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid2  = new Discord.TextInputBuilder()
        .setCustomId('nomecid2')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
      
        const primeira2 = new Discord.ActionRowBuilder().addComponents(motivo2);
        const segunda2 = new Discord.ActionRowBuilder().addComponents(idcid2);
        const terceira2 = new Discord.ActionRowBuilder().addComponents(nomecid2);
        modal2.addComponents(primeira2, segunda2, terceira2)
        await interaction.showModal(modal2);
    }} 
   } 
   if (!interaction.isModalSubmit()) return;
   if (interaction.customId === 'modal') {
    const resposta1 = interaction.fields.getTextInputValue('motivo');
    const resposta2 = interaction.fields.getTextInputValue('idcid');
    const resposta3 = interaction.fields.getTextInputValue('nomecid')
  

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    const user = await interaction.client.users.fetch(resposta2);

    const channel = interaction.channel

    const discordTranscripts = require("discord-html-transcripts")

    const topic = interaction.channel.topic

    const attachment = await discordTranscripts.createTranscript(channel, {
      fileName: `${channel.name}.html`
    });

    const ticketID = Math.floor(Math.random() * 100000)

    const data = new Date().toLocaleString()

    setTimeout( () => {
      interaction.channel.delete()
    }, 6000)
    
    const emb_log = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Ticket de:** \`<@${resposta2}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta3}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    
    const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`📞 Suporte\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })


    user.send({ embeds: [user_log], files: [attachment] })
      await interaction.guild.channels.cache.get(config.canal_logs).send({ 
        embeds: [emb_log],
        files: [attachment],
    })
  } else if (interaction.customId === 'modal2') {
    const resposta10 = interaction.fields.getTextInputValue('motivo2');
    const resposta11 = interaction.fields.getTextInputValue('idcid2');
    const resposta13 = interaction.fields.getTextInputValue('nomecid2');

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    

  const user = await interaction.client.users.fetch(resposta11);

  const channel = interaction.channel

  const discordTranscripts = require("discord-html-transcripts")

  const topic = interaction.channel.topic

 const attachment = await discordTranscripts.createTranscript(channel, {
  fileName: `${channel.name}.html`
 });

const ticketID = Math.floor(Math.random() * 100000)

const data = new Date().toLocaleString()

setTimeout( () => {
  interaction.channel.delete()
}, 6000)

const emb_log = new Discord.EmbedBuilder()
.setColor("Random")
.setDescription(`**Ticket de:** \`<@${resposta11}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta13}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta10}\`\`\``)
.setFooter({ text: `Vegas City | 🔖 Tickets System` })

  const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`📞 Suporte\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta10}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

  user.send({ embeds: [user_log] })
await interaction.guild.channels.cache.get(config.canal_logs).send({ 
  embeds: [emb_log],
  files: [attachment],
 })

  }
})

client.on('messageUpdate', async (oldMessage, newMessage) => {
  
  let emb_editado = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Nova mensagem editada!')
  .setDescription(`**Nova mensagem:** \`${newMessage}\`\n**Antiga mensagem:** \`${oldMessage}\`\n**Canal:** \`${oldMessage.channel}\``)
  .setFooter({ text: `Logs System | Vegas City` })

  const canaleditada = client.channels.cache.get('1106389102925979649')
  canaleditada.send({ embeds: [emb_editado] })

})

client.on('messageDelete', async (message) => {
  if (message.author.bot) return;

  let emb_apagado = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Nova mensagem apagada!')
  .setDescription(`**Mensagem:** \`${message}\`\n**Canal:** ${message.channel}`)
  .setFooter({ text: `Logs System | Vegas City` })

  const canaldelete = client.channels.cache.get('1106386989672042496')
  canaldelete.send({ embeds: [emb_apagado]})
})

client.on('guildMemberAdd', async (member) => {

  let emb_entrada = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Novo membro no servidor!')
  .setDescription(`**Membro:** \`${member}\``)
  .setFooter({ text: `Logs System | Vegas City` })

  const canalentrada = client.channels.cache.get('1106391942742409226')
  canalentrada.send({ embeds: [emb_entrada] })
})


client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    let choice = interaction.values[0]
    const member = interaction.user.id
    const guild = interaction.guild
    if (choice == 'duvida1') { 

      if (interaction.guild.channels.cache.find(ca => ca.name === `duvida-${member.id}`)) {
        let canal = interaction.guild.channels.cache.find(ca => ca.name === `duvida-${member.id}`);
        
        let emb_tem1 = new Discord.EmbedBuilder()
        .setDescription(`❌ **Você já tem um ticket aberto em: ${canal}!**`)
        .setColor('Random')
      
      interaction.reply({ embeds: [emb_tem1], ephemeral: true })
      } else {
      let nome_canal = `duvida-${interaction.user.username}`
      await db.set(`nome_canal`, { prod: nome_canal })
      let categoria = client.channels.cache.get(config.categoria);
      if (!categoria) categoria = null;

      interaction.guild.channels.create({

        name: nome_canal,
        parent: categoria,
        type: Discord.ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
          },
          {
            id: interaction.user.id,
            allow: [
              Discord.PermissionFlagsBits.ViewChannel,
              Discord.PermissionFlagsBits.AddReactions,
              Discord.PermissionFlagsBits.SendMessages,
              Discord.PermissionFlagsBits.AttachFiles,
              Discord.PermissionFlagsBits.EmbedLinks
            ]
          },
        ]

      }).then( (chat) => {

        let emb_ticket1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Dúvida** aberta com sucesso!`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
 
        let botao_aberto1 = new Discord.ActionRowBuilder()
        .addComponents([
         new Discord.ButtonBuilder()
         .setLabel('Ir')
         .setStyle(Discord.ButtonStyle.Link)
         .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
        ])
 
        interaction.reply({ embeds: [emb_ticket1], components: [botao_aberto1], ephemeral: true })

        let emb_aberto1 = new Discord.EmbedBuilder()
       .setColor("Random")
       .setDescription(`**Siga o modelo de dúvidas:**\n\n**Seu ID:\nSeu nome:\nQual sua dúvida:**\n\n**Categoria Selecionada:**\`\`\`❔ Dúvida\`\`\`\n\n**Botões azuis são para a staff!**\n\n**Ticket foi aberto com sucesso, aguarde que será atendido, nem necessidade de chamar ninguém no PV!**`)

       let botao_close1 = new Discord.ActionRowBuilder()
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('fechar_ticket2')
        .setEmoji('🗝️')
        .setLabel('Fechar')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('add2')
        .setLabel('Adicionar')
        .setEmoji('➕')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
      .addComponents([
       new Discord.ButtonBuilder()
       .setCustomId('rem2')
       .setLabel('Remover')
       .setEmoji('➖')
       .setStyle(Discord.ButtonStyle.Primary)
      ])

       chat.send({ embeds: [emb_aberto1], components: [botao_close1] }).then(m => {
        m.pin()
       })
     
      })
    }
    } 
  } if (interaction.isButton) {
    if (interaction.customId === 'fechar_ticket2') {
     
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
       
        let emb_certeza1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Olá ${interaction.user}, tem certeza que deseja fechar esse ticket?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza1 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim3')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao3')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza1], components: [botao_certeza1] })

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'add2') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
        
  interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja adicionar:', ephemeral: true });

  const filter = (msg) => msg.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

  collector.on('collect', async (msg) => {
    const userId = msg.content.trim();
    const user = await interaction.guild.members.fetch(userId).catch(() => null);

    if (!user) {
      return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
    }
    interaction.channel.permissionOverwrites.create(user.id, { ViewChannel: true, SendMessages: true });

    const emb_adicionado = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Usuário adicionado ao ticket!**\n\n**Quem adicionou:** ${interaction.user}\n\n**Usuário adicionado:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    .setThumbnail(`${user.user.displayAvatarURL()}`)

    msg.reply({ embeds: [emb_adicionado] });

    const chat = interaction.channel;
    const emb_dmadd = new Discord.EmbedBuilder()
    .setTitle('Adicionado a Ticket')
    .setColor("Random")
    .setDescription(`${user.user}\n\n**Você foi adicionado a um ticket de:** \`❔ Dúvidas\`\n\n**Clique no botão abaixo para ser redirecionado ao ticket!**`)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

    const botao_dmadd = new Discord.ActionRowBuilder()
    .addComponents([
      new Discord.ButtonBuilder()
      .setLabel('Ir a Ticket')
      .setEmoji('<a:seta:960886390621626408>')
      .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
      .setStyle(Discord.ButtonStyle.Link)
    ])

    user.send({ embeds: [emb_dmadd], components: [botao_dmadd] })
    collector.stop();
  });
  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      interaction.reply('Tempo esgotado. Por favor, tente novamente.');
    }
  });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    } else if (interaction.customId === 'rem2') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja remover:', ephemeral: true });
    
        const filter = (msg) => msg.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
    
        collector.on('collect', async (msg) => {
          const userId = msg.content.trim();
          const user = await interaction.guild.members.fetch(userId).catch(() => null);
    
          if (!user) {
            return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
          }
          
          interaction.channel.permissionOverwrites.delete(user.id);
          
          const emb_removido = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`**Usuário removido do ticket!**\n\n**Quem retirou:** ${interaction.user}\n\n**Usuário Removido:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
          .setThumbnail(`${user.user.displayAvatarURL()}`)

          msg.reply({ embeds: [emb_removido] });

          const emb_dmrem = new Discord.EmbedBuilder()
          .setTitle('Removido de Ticket')
          .setColor("Random")
          .setDescription(`${user.user}\n\n**Você foi removido do ticket:** \`❔ Dúvidas\`\n\n**Staff que fechou:** \`${interaction.user.username}\`\n**ID do staff:** \`${interaction.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })

          user.send({ embeds: [emb_dmrem] })
          collector.stop();
          });
    
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            interaction.reply('Tempo esgotado. Por favor, tente novamente.');
          }
        });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    }
    else if (interaction.customId === 'nao3') {
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const message = await interaction.message.fetch();
        message.delete()

        let reaberto = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Ticket reaberto por: ${interaction.user}**`)

        interaction.reply({ embeds: [reaberto] })
        setTimeout( () => {
          interaction.deleteReply()
        }, 5000)

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'sim3') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        let emb_certeza2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**${interaction.user} | Deseja o cidadão ter acesso ao transcript?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza2 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim4')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao4')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza2], components: [botao_certeza2] })

      } else {
        interaction.reply({ content: `Você não possui permissão para fechar este ticket.`, ephemeral: true })
      }
    } else if (interaction.customId === 'sim4') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const modal3 = new Discord.ModalBuilder()
        .setCustomId('modal3')
        .setTitle('Fechamento de Ticket')

        const motivo3 = new Discord.TextInputBuilder()
        .setCustomId('motivo3')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid3 = new Discord.TextInputBuilder()
        .setCustomId('idcid3')
        .setLabel('Id do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid3  = new Discord.TextInputBuilder()
        .setCustomId('nomecid3')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const primeira3 = new Discord.ActionRowBuilder().addComponents(motivo3);
        const segunda3 = new Discord.ActionRowBuilder().addComponents(idcid3);
        const terceira3 = new Discord.ActionRowBuilder().addComponents(nomecid3);
        modal3.addComponents(primeira3, segunda3, terceira3)
        await interaction.showModal(modal3);
      }
    } else if (interaction.customId === 'nao4') {
      const message = await interaction.message.fetch();
      message.delete();
  
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {
  
        const modal4 = new Discord.ModalBuilder()
        .setCustomId('modal4')
        .setTitle('Fechamento de Ticket')

        const motivo4 = new Discord.TextInputBuilder()
        .setCustomId('motivo4')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid4 = new Discord.TextInputBuilder()
        .setCustomId('idcid4')
        .setLabel('ID do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid4  = new Discord.TextInputBuilder()
        .setCustomId('nomecid4')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
      
        const primeira4 = new Discord.ActionRowBuilder().addComponents(motivo4);
        const segunda4 = new Discord.ActionRowBuilder().addComponents(idcid4);
        const terceira4 = new Discord.ActionRowBuilder().addComponents(nomecid4);
        modal4.addComponents(primeira4, segunda4, terceira4)
        await interaction.showModal(modal4);
    }} 
   } 
   if (!interaction.isModalSubmit()) return;
   if (interaction.customId === 'modal3') {
    const resposta1 = interaction.fields.getTextInputValue('motivo3');
    const resposta2 = interaction.fields.getTextInputValue('idcid3');
    const resposta3 = interaction.fields.getTextInputValue('nomecid3')
  

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    const user = await interaction.client.users.fetch(resposta2);

    const channel = interaction.channel

    const discordTranscripts = require("discord-html-transcripts")

    const topic = interaction.channel.topic

    const attachment = await discordTranscripts.createTranscript(channel, {
      fileName: `${channel.name}.html`
    });

    const ticketID = Math.floor(Math.random() * 100000)

    const data = new Date().toLocaleString()

    setTimeout( () => {
      interaction.channel.delete()
    }, 6000)
    
    const emb_log = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Ticket de:** \`<@${resposta2}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta3}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    
    const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`❔ Dúvidas\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })


    user.send({ embeds: [user_log], files: [attachment] })
      await interaction.guild.channels.cache.get(config.canal_logs).send({ 
        embeds: [emb_log],
        files: [attachment],
    })
  } else if (interaction.customId === 'modal4') {
    const resposta10 = interaction.fields.getTextInputValue('motivo4');
    const resposta11 = interaction.fields.getTextInputValue('idcid4');
    const resposta13 = interaction.fields.getTextInputValue('nomecid4');

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    

  const user = await interaction.client.users.fetch(resposta11);

  const channel = interaction.channel

  const discordTranscripts = require("discord-html-transcripts")

  const topic = interaction.channel.topic

 const attachment = await discordTranscripts.createTranscript(channel, {
  fileName: `${channel.name}.html`
 });

const ticketID = Math.floor(Math.random() * 100000)

const data = new Date().toLocaleString()

setTimeout( () => {
  interaction.channel.delete()
}, 6000)

const emb_log = new Discord.EmbedBuilder()
.setColor("Random")
.setDescription(`**Ticket de:** \`<@${resposta11}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta13}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta10}\`\`\``)
.setFooter({ text: `Vegas City | 🔖 Tickets System` })

  const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`❔ Dúvidas\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta10}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

  user.send({ embeds: [user_log] })
await interaction.guild.channels.cache.get(config.canal_logs).send({ 
  embeds: [emb_log],
  files: [attachment],
 })

  }
})

client.on('messageUpdate', async (oldMessage, newMessage) => {
  
  let emb_editado = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Nova mensagem editada!')
  .setDescription(`**Nova mensagem:** \`${newMessage}\`\n**Antiga mensagem:** \`${oldMessage}\`\n**Canal:** \`${oldMessage.channel}\``)
  .setFooter({ text: `Logs System | Vegas City` })

  const canaleditada = client.channels.cache.get('1106389102925979649')
  canaleditada.send({ embeds: [emb_editado] })

})

client.on('messageDelete', async (message) => {
  if (message.author.bot) return;

  let emb_apagado = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Nova mensagem apagada!')
  .setDescription(`**Mensagem:** \`${message}\`\n**Canal:** ${message.channel}`)
  .setFooter({ text: `Logs System | Vegas City` })

  const canaldelete = client.channels.cache.get('1106386989672042496')
  canaldelete.send({ embeds: [emb_apagado]})
})

client.on('guildMemberAdd', async (member) => {

  let emb_entrada = new Discord.EmbedBuilder()
  .setColor("Random")
  .setTitle('Novo membro no servidor!')
  .setDescription(`**Membro:** \`${member}\``)
  .setFooter({ text: `Logs System | Vegas City` })

  const canalentrada = client.channels.cache.get('1106391942742409226')
  canalentrada.send({ embeds: [emb_entrada] })

})

client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    let choice = interaction.values[0]
    const member = interaction.user.id
    const guild = interaction.guild
    if (choice == 'denuncia1') { 

      if (interaction.guild.channels.cache.find(ca => ca.name === `denuncia-${member.id}`)) {
        let canal = interaction.guild.channels.cache.find(ca => ca.name === `denuncia-${member.id}`);
        
        let emb_tem1 = new Discord.EmbedBuilder()
        .setDescription(`❌ **Você já tem um ticket aberto em: ${canal}!**`)
        .setColor('Random')
      
      interaction.reply({ embeds: [emb_tem1], ephemeral: true })
      } else {
      let nome_canal = `denuncia-${interaction.user.username}`
      await db.set(`nome_canal`, { prod: nome_canal })
      let categoria = client.channels.cache.get(config.categoria);
      if (!categoria) categoria = null;

      interaction.guild.channels.create({

        name: nome_canal,
        parent: categoria,
        type: Discord.ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
          },
          {
            id: interaction.user.id,
            allow: [
              Discord.PermissionFlagsBits.ViewChannel,
              Discord.PermissionFlagsBits.AddReactions,
              Discord.PermissionFlagsBits.SendMessages,
              Discord.PermissionFlagsBits.AttachFiles,
              Discord.PermissionFlagsBits.EmbedLinks
            ]
          },
        ]

      }).then( (chat) => {

        let emb_ticket1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Denúncia** aberta com sucesso!`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
 
        let botao_aberto1 = new Discord.ActionRowBuilder()
        .addComponents([
         new Discord.ButtonBuilder()
         .setLabel('Ir')
         .setStyle(Discord.ButtonStyle.Link)
         .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
        ])
 
        interaction.reply({ embeds: [emb_ticket1], components: [botao_aberto1], ephemeral: true })

        let emb_aberto1 = new Discord.EmbedBuilder()
       .setColor("Random")
       .setDescription(`**Siga o modelo de dúvidas:**\n\n**Seu ID:**\n**Seu nome:**\n**ID do denunciado**\n**Link do video:**\n\n**Categoria Selecionada:**\`\`\`🎴 Denúncia\`\`\`\n\n**Botões azuis são para a staff!**\n\n**Ticket foi aberto com sucesso, aguarde que será atendido, nem necessidade de chamar ninguém no PV!**`)

       let botao_close1 = new Discord.ActionRowBuilder()
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('fechar_ticket3')
        .setEmoji('🗝️')
        .setLabel('Fechar')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('add3')
        .setLabel('Adicionar')
        .setEmoji('➕')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
      .addComponents([
       new Discord.ButtonBuilder()
       .setCustomId('rem3')
       .setLabel('Remover')
       .setEmoji('➖')
       .setStyle(Discord.ButtonStyle.Primary)
      ])

       chat.send({ embeds: [emb_aberto1], components: [botao_close1] }).then(m => {
        m.pin()
       })
     
      })
    }
    } 
  } if (interaction.isButton) {
    if (interaction.customId === 'fechar_ticket3') {
     
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
       
        let emb_certeza1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Olá ${interaction.user}, tem certeza que deseja fechar esse ticket?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza1 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim5')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao5')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza1], components: [botao_certeza1] })

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'add3') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
        
  interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja adicionar:', ephemeral: true });

  const filter = (msg) => msg.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

  collector.on('collect', async (msg) => {
    const userId = msg.content.trim();
    const user = await interaction.guild.members.fetch(userId).catch(() => null);

    if (!user) {
      return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
    }
    interaction.channel.permissionOverwrites.create(user.id, { ViewChannel: true, SendMessages: true });

    const emb_adicionado = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Usuário adicionado ao ticket!**\n\n**Quem adicionou:** ${interaction.user}\n\n**Usuário adicionado:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    .setThumbnail(`${user.user.displayAvatarURL()}`)

    msg.reply({ embeds: [emb_adicionado] });

    const chat = interaction.channel;
    const emb_dmadd = new Discord.EmbedBuilder()
    .setTitle('Adicionado a Ticket')
    .setColor("Random")
    .setDescription(`${user.user}\n\n**Você foi adicionado a um ticket de:** \`🎴 Denúncia\`\n\n**Clique no botão abaixo para ser redirecionado ao ticket!**`)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

    const botao_dmadd = new Discord.ActionRowBuilder()
    .addComponents([
      new Discord.ButtonBuilder()
      .setLabel('Ir a Ticket')
      .setEmoji('<a:seta:960886390621626408>')
      .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
      .setStyle(Discord.ButtonStyle.Link)
    ])

    user.send({ embeds: [emb_dmadd], components: [botao_dmadd] })
    collector.stop();
  });
  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      interaction.reply('Tempo esgotado. Por favor, tente novamente.');
    }
  });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    } else if (interaction.customId === 'rem3') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja remover:', ephemeral: true });
    
        const filter = (msg) => msg.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
    
        collector.on('collect', async (msg) => {
          const userId = msg.content.trim();
          const user = await interaction.guild.members.fetch(userId).catch(() => null);
    
          if (!user) {
            return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
          }
          
          interaction.channel.permissionOverwrites.delete(user.id);
          
          const emb_removido = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`**Usuário removido do ticket!**\n\n**Quem retirou:** ${interaction.user}\n\n**Usuário Removido:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
          .setThumbnail(`${user.user.displayAvatarURL()}`)

          msg.reply({ embeds: [emb_removido] });

          const emb_dmrem = new Discord.EmbedBuilder()
          .setTitle('Removido de Ticket')
          .setColor("Random")
          .setDescription(`${user.user}\n\n**Você foi removido do ticket:** \`🎴 Denúncia\`\n\n**Staff que fechou:** \`${interaction.user.username}\`\n**ID do staff:** \`${interaction.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })

          user.send({ embeds: [emb_dmrem] })
          collector.stop();
          });
    
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            interaction.reply('Tempo esgotado. Por favor, tente novamente.');
          }
        });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    }
    else if (interaction.customId === 'nao5') {
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const message = await interaction.message.fetch();
        message.delete()

        let reaberto = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Ticket reaberto por: ${interaction.user}**`)

        interaction.reply({ embeds: [reaberto] })
        setTimeout( () => {
          interaction.deleteReply()
        }, 5000)

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'sim5') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        let emb_certeza2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**${interaction.user} | Deseja o cidadão ter acesso ao transcript?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza2 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim6')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao6')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza2], components: [botao_certeza2] })

      } else {
        interaction.reply({ content: `Você não possui permissão para fechar este ticket.`, ephemeral: true })
      }
    } else if (interaction.customId === 'sim6') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const modal4 = new Discord.ModalBuilder()
        .setCustomId('modal4')
        .setTitle('Fechamento de Ticket')

        const motivo4 = new Discord.TextInputBuilder()
        .setCustomId('motivo4')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid4 = new Discord.TextInputBuilder()
        .setCustomId('idcid4')
        .setLabel('Id do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid4  = new Discord.TextInputBuilder()
        .setCustomId('nomecid4')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const primeira4 = new Discord.ActionRowBuilder().addComponents(motivo4);
        const segunda4 = new Discord.ActionRowBuilder().addComponents(idcid4);
        const terceira4 = new Discord.ActionRowBuilder().addComponents(nomecid4);
        modal4.addComponents(primeira4, segunda4, terceira4)
        await interaction.showModal(modal4);
      }
    } else if (interaction.customId === 'nao6') {
      const message = await interaction.message.fetch();
      message.delete();
  
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {
  
        const modal5 = new Discord.ModalBuilder()
        .setCustomId('modal5')
        .setTitle('Fechamento de Ticket')

        const motivo5 = new Discord.TextInputBuilder()
        .setCustomId('motivo5')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid5 = new Discord.TextInputBuilder()
        .setCustomId('idcid5')
        .setLabel('ID do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid5  = new Discord.TextInputBuilder()
        .setCustomId('nomecid5')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
      
        const primeira5 = new Discord.ActionRowBuilder().addComponents(motivo5);
        const segunda5 = new Discord.ActionRowBuilder().addComponents(idcid5);
        const terceira5 = new Discord.ActionRowBuilder().addComponents(nomecid5);
        modal5.addComponents(primeira5, segunda5, terceira5)
        await interaction.showModal(modal5);
    }} 
   } 
   if (!interaction.isModalSubmit()) return;
   if (interaction.customId === 'modal4') {
    const resposta1 = interaction.fields.getTextInputValue('motivo4');
    const resposta2 = interaction.fields.getTextInputValue('idcid4');
    const resposta3 = interaction.fields.getTextInputValue('nomecid4')
  

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    const user = await interaction.client.users.fetch(resposta2);

    const channel = interaction.channel

    const discordTranscripts = require("discord-html-transcripts")

    const topic = interaction.channel.topic

    const attachment = await discordTranscripts.createTranscript(channel, {
      fileName: `${channel.name}.html`
    });

    const ticketID = Math.floor(Math.random() * 100000)

    const data = new Date().toLocaleString()

    setTimeout( () => {
      interaction.channel.delete()
    }, 6000)
    
    const emb_log = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Ticket de:** \`<@${resposta2}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta3}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    
    const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`🎴 Denúncia\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })


    user.send({ embeds: [user_log], files: [attachment] })
      await interaction.guild.channels.cache.get(config.canal_logs).send({ 
        embeds: [emb_log],
        files: [attachment],
    })
  } else if (interaction.customId === 'modal5') {
    const resposta10 = interaction.fields.getTextInputValue('motivo5');
    const resposta11 = interaction.fields.getTextInputValue('idcid5');
    const resposta13 = interaction.fields.getTextInputValue('nomecid5');

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    

  const user = await interaction.client.users.fetch(resposta11);

  const channel = interaction.channel

  const discordTranscripts = require("discord-html-transcripts")

  const topic = interaction.channel.topic

 const attachment = await discordTranscripts.createTranscript(channel, {
  fileName: `${channel.name}.html`
 });

const ticketID = Math.floor(Math.random() * 100000)

const data = new Date().toLocaleString()

setTimeout( () => {
  interaction.channel.delete()
}, 6000)

const emb_log = new Discord.EmbedBuilder()
.setColor("Random")
.setDescription(`**Ticket de:** \`<@${resposta11}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta13}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta10}\`\`\``)
.setFooter({ text: `Vegas City | 🔖 Tickets System` })

  const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`🎴 Denúncia\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta10}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

  user.send({ embeds: [user_log] })
await interaction.guild.channels.cache.get(config.canal_logs).send({ 
  embeds: [emb_log],
  files: [attachment],
 })

  }
})


client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    let choice = interaction.values[0]
    const member = interaction.user.id
    const guild = interaction.guild
    if (choice == 'vip1') { 

      if (interaction.guild.channels.cache.find(ca => ca.name === `vips-${member.id}`)) {
        let canal = interaction.guild.channels.cache.find(ca => ca.name === `vips-${member.id}`);
        
        let emb_tem1 = new Discord.EmbedBuilder()
        .setDescription(`❌ **Você já tem um ticket aberto em: ${canal}!**`)
        .setColor('Random')
      
      interaction.reply({ embeds: [emb_tem1], ephemeral: true })
      } else {
      let nome_canal = `vips-${interaction.user.username}`
      await db.set(`nome_canal`, { prod: nome_canal })
      let categoria = client.channels.cache.get(config.categoria);
      if (!categoria) categoria = null;

      interaction.guild.channels.create({

        name: nome_canal,
        parent: categoria,
        type: Discord.ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
          },
          {
            id: interaction.user.id,
            allow: [
              Discord.PermissionFlagsBits.ViewChannel,
              Discord.PermissionFlagsBits.AddReactions,
              Discord.PermissionFlagsBits.SendMessages,
              Discord.PermissionFlagsBits.AttachFiles,
              Discord.PermissionFlagsBits.EmbedLinks
            ]
          },
        ]

      }).then( (chat) => {

        let emb_ticket1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Vips e Doações** aberta com sucesso!`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
 
        let botao_aberto1 = new Discord.ActionRowBuilder()
        .addComponents([
         new Discord.ButtonBuilder()
         .setLabel('Ir')
         .setStyle(Discord.ButtonStyle.Link)
         .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
        ])
 
        interaction.reply({ embeds: [emb_ticket1], components: [botao_aberto1], ephemeral: true })

        let emb_aberto1 = new Discord.EmbedBuilder()
       .setColor("Random")
       .setDescription(`**Siga o modelo de vips e doações:**\n\n**Seu ID:**\n**Seu nome:**\n**Produto Comprado**\n**Comprovante:**\n**Motivo de Problema:**\n\n**Categoria Selecionada:**\`\`\`💰 Vips e Doações\`\`\`\n\n**Botões azuis são para a staff!**\n\n**Ticket foi aberto com sucesso, aguarde que será atendido, nem necessidade de chamar ninguém no PV!**`)

       let botao_close1 = new Discord.ActionRowBuilder()
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('fechar_ticket4')
        .setEmoji('🗝️')
        .setLabel('Fechar')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('add4')
        .setLabel('Adicionar')
        .setEmoji('➕')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
      .addComponents([
       new Discord.ButtonBuilder()
       .setCustomId('rem4')
       .setLabel('Remover')
       .setEmoji('➖')
       .setStyle(Discord.ButtonStyle.Primary)
      ])

       chat.send({ embeds: [emb_aberto1], components: [botao_close1] }).then(m => {
        m.pin()
       })
     
      })
    }
    } 
  } if (interaction.isButton) {
    if (interaction.customId === 'fechar_ticket4') {
     
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
       
        let emb_certeza1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Olá ${interaction.user}, tem certeza que deseja fechar esse ticket?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza1 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim7')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao7')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza1], components: [botao_certeza1] })

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'add4') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
        
  interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja adicionar:', ephemeral: true });

  const filter = (msg) => msg.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

  collector.on('collect', async (msg) => {
    const userId = msg.content.trim();
    const user = await interaction.guild.members.fetch(userId).catch(() => null);

    if (!user) {
      return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
    }
    interaction.channel.permissionOverwrites.create(user.id, { ViewChannel: true, SendMessages: true });

    const emb_adicionado = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Usuário adicionado ao ticket!**\n\n**Quem adicionou:** ${interaction.user}\n\n**Usuário adicionado:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    .setThumbnail(`${user.user.displayAvatarURL()}`)

    msg.reply({ embeds: [emb_adicionado] });

    const chat = interaction.channel;
    const emb_dmadd = new Discord.EmbedBuilder()
    .setTitle('Adicionado a Ticket')
    .setColor("Random")
    .setDescription(`${user.user}\n\n**Você foi adicionado a um ticket de:** \`💰 Vips e Doações\`\n\n**Clique no botão abaixo para ser redirecionado ao ticket!**`)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

    const botao_dmadd = new Discord.ActionRowBuilder()
    .addComponents([
      new Discord.ButtonBuilder()
      .setLabel('Ir a Ticket')
      .setEmoji('<a:seta:960886390621626408>')
      .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
      .setStyle(Discord.ButtonStyle.Link)
    ])

    user.send({ embeds: [emb_dmadd], components: [botao_dmadd] })
    collector.stop();
  });
  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      interaction.reply('Tempo esgotado. Por favor, tente novamente.');
    }
  });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    } else if (interaction.customId === 'rem4') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja remover:', ephemeral: true });
    
        const filter = (msg) => msg.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
    
        collector.on('collect', async (msg) => {
          const userId = msg.content.trim();
          const user = await interaction.guild.members.fetch(userId).catch(() => null);
    
          if (!user) {
            return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
          }
          
          interaction.channel.permissionOverwrites.delete(user.id);
          
          const emb_removido = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`**Usuário removido do ticket!**\n\n**Quem retirou:** ${interaction.user}\n\n**Usuário Removido:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
          .setThumbnail(`${user.user.displayAvatarURL()}`)

          msg.reply({ embeds: [emb_removido] });

          const emb_dmrem = new Discord.EmbedBuilder()
          .setTitle('Removido de Ticket')
          .setColor("Random")
          .setDescription(`${user.user}\n\n**Você foi removido do ticket:** \`💰 Vips e Doações\`\n\n**Staff que fechou:** \`${interaction.user.username}\`\n**ID do staff:** \`${interaction.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })

          user.send({ embeds: [emb_dmrem] })
          collector.stop();
          });
    
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            interaction.reply('Tempo esgotado. Por favor, tente novamente.');
          }
        });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    }
    else if (interaction.customId === 'nao7') {
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const message = await interaction.message.fetch();
        message.delete()

        let reaberto = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Ticket reaberto por: ${interaction.user}**`)

        interaction.reply({ embeds: [reaberto] })
        setTimeout( () => {
          interaction.deleteReply()
        }, 5000)

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'sim7') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        let emb_certeza2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**${interaction.user} | Deseja o cidadão ter acesso ao transcript?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza2 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim8')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao8')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza2], components: [botao_certeza2] })

      } else {
        interaction.reply({ content: `Você não possui permissão para fechar este ticket.`, ephemeral: true })
      }
    } else if (interaction.customId === 'sim8') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const modal6 = new Discord.ModalBuilder()
        .setCustomId('modal6')
        .setTitle('Fechamento de Ticket')

        const motivo6 = new Discord.TextInputBuilder()
        .setCustomId('motivo6')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid6 = new Discord.TextInputBuilder()
        .setCustomId('idcid6')
        .setLabel('Id do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid6  = new Discord.TextInputBuilder()
        .setCustomId('nomecid6')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const primeira4 = new Discord.ActionRowBuilder().addComponents(motivo6);
        const segunda4 = new Discord.ActionRowBuilder().addComponents(idcid6);
        const terceira4 = new Discord.ActionRowBuilder().addComponents(nomecid6);
        modal6.addComponents(primeira4, segunda4, terceira4)
        await interaction.showModal(modal6);
      }
    } else if (interaction.customId === 'nao8') {
      const message = await interaction.message.fetch();
      message.delete();
  
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {
  
        const modal7 = new Discord.ModalBuilder()
        .setCustomId('modal7')
        .setTitle('Fechamento de Ticket')

        const motivo7 = new Discord.TextInputBuilder()
        .setCustomId('motivo7')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid7 = new Discord.TextInputBuilder()
        .setCustomId('idcid7')
        .setLabel('ID do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid7 = new Discord.TextInputBuilder()
        .setCustomId('nomecid7')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
      
        const primeira5 = new Discord.ActionRowBuilder().addComponents(motivo7);
        const segunda5 = new Discord.ActionRowBuilder().addComponents(idcid7);
        const terceira5 = new Discord.ActionRowBuilder().addComponents(nomecid7);
        modal7.addComponents(primeira5, segunda5, terceira5)
        await interaction.showModal(modal7);
    }} 
   } 
   if (!interaction.isModalSubmit()) return;
   if (interaction.customId === 'modal6') {
    const resposta1 = interaction.fields.getTextInputValue('motivo6');
    const resposta2 = interaction.fields.getTextInputValue('idcid6');
    const resposta3 = interaction.fields.getTextInputValue('nomecid6')
  

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    const user = await interaction.client.users.fetch(resposta2);

    const channel = interaction.channel

    const discordTranscripts = require("discord-html-transcripts")

    const topic = interaction.channel.topic

    const attachment = await discordTranscripts.createTranscript(channel, {
      fileName: `${channel.name}.html`
    });

    const ticketID = Math.floor(Math.random() * 100000)

    const data = new Date().toLocaleString()

    setTimeout( () => {
      interaction.channel.delete()
    }, 6000)
    
    const emb_log = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Ticket de:** \`<@${resposta2}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta3}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    
    const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`💰 Vips e Doações\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })


    user.send({ embeds: [user_log], files: [attachment] })
      await interaction.guild.channels.cache.get(config.canal_logs).send({ 
        embeds: [emb_log],
        files: [attachment],
    })
  } else if (interaction.customId === 'modal7') {
    const resposta10 = interaction.fields.getTextInputValue('motivo7');
    const resposta11 = interaction.fields.getTextInputValue('idcid7');
    const resposta13 = interaction.fields.getTextInputValue('nomecid7');

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    

  const user = await interaction.client.users.fetch(resposta11);

  const channel = interaction.channel

  const discordTranscripts = require("discord-html-transcripts")

  const topic = interaction.channel.topic

 const attachment = await discordTranscripts.createTranscript(channel, {
  fileName: `${channel.name}.html`
 });

const ticketID = Math.floor(Math.random() * 100000)

const data = new Date().toLocaleString()

setTimeout( () => {
  interaction.channel.delete()
}, 6000)

const emb_log = new Discord.EmbedBuilder()
.setColor("Random")
.setDescription(`**Ticket de:** \`<@${resposta11}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta13}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta10}\`\`\``)
.setFooter({ text: `Vegas City | 🔖 Tickets System` })

  const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`💰 Vips e Doações\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta10}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

  user.send({ embeds: [user_log] })
await interaction.guild.channels.cache.get(config.canal_logs).send({ 
  embeds: [emb_log],
  files: [attachment],
 })

  }
})


client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    let choice = interaction.values[0]
    const member = interaction.user.id
    const guild = interaction.guild
    if (choice == 'bugs1') { 

      if (interaction.guild.channels.cache.find(ca => ca.name === `bugs-${member.id}`)) {
        let canal = interaction.guild.channels.cache.find(ca => ca.name === `bugs-${member.id}`);
        
        let emb_tem1 = new Discord.EmbedBuilder()
        .setDescription(`❌ **Você já tem um ticket aberto em: ${canal}!**`)
        .setColor('Random')
      
      interaction.reply({ embeds: [emb_tem1], ephemeral: true })
      } else {
      let nome_canal = `bugs-${interaction.user.username}`
      await db.set(`nome_canal`, { prod: nome_canal })
      let categoria = client.channels.cache.get(config.categoria);
      if (!categoria) categoria = null;

      interaction.guild.channels.create({

        name: nome_canal,
        parent: categoria,
        type: Discord.ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
          },
          {
            id: interaction.user.id,
            allow: [
              Discord.PermissionFlagsBits.ViewChannel,
              Discord.PermissionFlagsBits.AddReactions,
              Discord.PermissionFlagsBits.SendMessages,
              Discord.PermissionFlagsBits.AttachFiles,
              Discord.PermissionFlagsBits.EmbedLinks
            ]
          },
        ]

      }).then( (chat) => {

        let emb_ticket1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Relatar Bugs** aberta com sucesso!`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
 
        let botao_aberto1 = new Discord.ActionRowBuilder()
        .addComponents([
         new Discord.ButtonBuilder()
         .setLabel('Ir')
         .setStyle(Discord.ButtonStyle.Link)
         .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
        ])
 
        interaction.reply({ embeds: [emb_ticket1], components: [botao_aberto1], ephemeral: true })

        let emb_aberto1 = new Discord.EmbedBuilder()
       .setColor("Random")
       .setDescription(`**Siga o modelo de relatar bugs:**\n\n**Seu ID:**\n**Seu nome:**\n**Bug presenciado:**\n**Link/Video:**\n\n**Categoria Selecionada:**\`\`\`❗ Relatar Bugs\`\`\`\n\n**Botões azuis são para a staff!**\n\n**Ticket foi aberto com sucesso, aguarde que será atendido, nem necessidade de chamar ninguém no PV!**`)

       let botao_close1 = new Discord.ActionRowBuilder()
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('fechar_ticket5')
        .setEmoji('🗝️')
        .setLabel('Fechar')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
       .addComponents([
        new Discord.ButtonBuilder()
        .setCustomId('add5')
        .setLabel('Adicionar')
        .setEmoji('➕')
        .setStyle(Discord.ButtonStyle.Primary)
       ])
      .addComponents([
       new Discord.ButtonBuilder()
       .setCustomId('rem5')
       .setLabel('Remover')
       .setEmoji('➖')
       .setStyle(Discord.ButtonStyle.Primary)
      ])

       chat.send({ embeds: [emb_aberto1], components: [botao_close1] }).then(m => {
        m.pin()
       })
     
      })
    }
    } 
  } if (interaction.isButton) {
    if (interaction.customId === 'fechar_ticket5') {
     
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
       
        let emb_certeza1 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Olá ${interaction.user}, tem certeza que deseja fechar esse ticket?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza1 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim9')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao9')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza1], components: [botao_certeza1] })

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'add5') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {
        
  interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja adicionar:', ephemeral: true });

  const filter = (msg) => msg.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

  collector.on('collect', async (msg) => {
    const userId = msg.content.trim();
    const user = await interaction.guild.members.fetch(userId).catch(() => null);

    if (!user) {
      return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
    }
    interaction.channel.permissionOverwrites.create(user.id, { ViewChannel: true, SendMessages: true });

    const emb_adicionado = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Usuário adicionado ao ticket!**\n\n**Quem adicionou:** ${interaction.user}\n\n**Usuário adicionado:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    .setThumbnail(`${user.user.displayAvatarURL()}`)

    msg.reply({ embeds: [emb_adicionado] });

    const chat = interaction.channel;
    const emb_dmadd = new Discord.EmbedBuilder()
    .setTitle('Adicionado a Ticket')
    .setColor("Random")
    .setDescription(`${user.user}\n\n**Você foi adicionado a um ticket de:** \`❗ Relatar Bugs\`\n\n**Clique no botão abaixo para ser redirecionado ao ticket!**`)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

    const botao_dmadd = new Discord.ActionRowBuilder()
    .addComponents([
      new Discord.ButtonBuilder()
      .setLabel('Ir a Ticket')
      .setEmoji('<a:seta:960886390621626408>')
      .setURL(`https://discord.com/channels/${interaction.guild.id}/${chat.id}`)
      .setStyle(Discord.ButtonStyle.Link)
    ])

    user.send({ embeds: [emb_dmadd], components: [botao_dmadd] })
    collector.stop();
  });
  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      interaction.reply('Tempo esgotado. Por favor, tente novamente.');
    }
  });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    } else if (interaction.customId === 'rem5') {

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        interaction.reply({ content: 'Por favor, digite o ID do usuário que deseja remover:', ephemeral: true });
    
        const filter = (msg) => msg.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
    
        collector.on('collect', async (msg) => {
          const userId = msg.content.trim();
          const user = await interaction.guild.members.fetch(userId).catch(() => null);
    
          if (!user) {
            return msg.reply('Não foi possível encontrar o usuário com o ID fornecido.');
          }
          
          interaction.channel.permissionOverwrites.delete(user.id);
          
          const emb_removido = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`**Usuário removido do ticket!**\n\n**Quem retirou:** ${interaction.user}\n\n**Usuário Removido:** \`${user.user.username}\`\n**ID:** \`${user.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
          .setThumbnail(`${user.user.displayAvatarURL()}`)

          msg.reply({ embeds: [emb_removido] });

          const emb_dmrem = new Discord.EmbedBuilder()
          .setTitle('Removido de Ticket')
          .setColor("Random")
          .setDescription(`${user.user}\n\n**Você foi removido do ticket:** \`❗ Relatar Bugs\`\n\n**Staff que fechou:** \`${interaction.user.username}\`\n**ID do staff:** \`${interaction.user.id}\``)
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })

          user.send({ embeds: [emb_dmrem] })
          collector.stop();
          });
    
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            interaction.reply('Tempo esgotado. Por favor, tente novamente.');
          }
        });
      } else {
        interaction.reply({ content: 'Você não tem permissão para usar este botão.', ephemeral: true });
      }
    }
    else if (interaction.customId === 'nao9') {
      const member = interaction.member;
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF']; 
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const message = await interaction.message.fetch();
        message.delete()

        let reaberto = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**Ticket reaberto por: ${interaction.user}**`)

        interaction.reply({ embeds: [reaberto] })
        setTimeout( () => {
          interaction.deleteReply()
        }, 5000)

      } else {
        interaction.reply({ content: 'Você não tem permissão para fechar este ticket.', ephemeral: true });
      }

    } else if (interaction.customId === 'sim9') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        let emb_certeza2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`**${interaction.user} | Deseja o cidadão ter acesso ao transcript?**`)
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })

        const botao_certeza2 = new Discord.ActionRowBuilder()
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('sim10')
          .setLabel('Sim')
          .setEmoji('✅')
          .setStyle(Discord.ButtonStyle.Success)
        ])
        .addComponents([
          new Discord.ButtonBuilder()
          .setCustomId('nao10')
          .setLabel('Não')
          .setEmoji('❌')
          .setStyle(Discord.ButtonStyle.Danger)
        ])

        interaction.reply({ embeds: [emb_certeza2], components: [botao_certeza2] })

      } else {
        interaction.reply({ content: `Você não possui permissão para fechar este ticket.`, ephemeral: true })
      }
    } else if (interaction.customId === 'sim10') {
      const message = await interaction.message.fetch();
      message.delete();

      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {

        const modal8 = new Discord.ModalBuilder()
        .setCustomId('modal8')
        .setTitle('Fechamento de Ticket')

        const motivo8 = new Discord.TextInputBuilder()
        .setCustomId('motivo8')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid8 = new Discord.TextInputBuilder()
        .setCustomId('idcid8')
        .setLabel('Id do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid8  = new Discord.TextInputBuilder()
        .setCustomId('nomecid8')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const primeira4 = new Discord.ActionRowBuilder().addComponents(motivo8);
        const segunda4 = new Discord.ActionRowBuilder().addComponents(idcid8);
        const terceira4 = new Discord.ActionRowBuilder().addComponents(nomecid8);
        modal8.addComponents(primeira4, segunda4, terceira4)
        await interaction.showModal(modal8);
      }
    } else if (interaction.customId === 'nao10') {
      const message = await interaction.message.fetch();
      message.delete();
  
      const userRoles = interaction.member.roles.cache.map(role => role.name);
      const allowedRoles = ['SERVIDOR | FULL ACCESS', 'SERVIDOR | TICKET ACCESS', 'SERVIDOR | STAFF'];
      if (allowedRoles.some(role => userRoles.includes(role))) {
  
        const modal9 = new Discord.ModalBuilder()
        .setCustomId('modal9')
        .setTitle('Fechamento de Ticket')

        const motivo9 = new Discord.TextInputBuilder()
        .setCustomId('motivo9')
        .setLabel('Motivo de Fechamento')
        .setMaxLength(100)
        .setMinLength(3)
        .setPlaceholder('Informe o motivo')
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const idcid9 = new Discord.TextInputBuilder()
        .setCustomId('idcid9')
        .setLabel('ID do cidadão')
        .setMaxLength(25)
        .setMinLength(1)
        .setPlaceholder('Informe o ID do cidadão...')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)

        const nomecid9 = new Discord.TextInputBuilder()
        .setCustomId('nomecid9')
        .setLabel('Nome e ID do cidadão ')
        .setMaxLength(50)
        .setMinLength(1)
        .setPlaceholder('Siga o exemplo: Fred Smith | 47245')
        .setStyle(Discord.TextInputStyle.Short)
        .setRequired(true)
      
        const primeira5 = new Discord.ActionRowBuilder().addComponents(motivo9);
        const segunda5 = new Discord.ActionRowBuilder().addComponents(idcid9);
        const terceira5 = new Discord.ActionRowBuilder().addComponents(nomecid9);
        modal9.addComponents(primeira5, segunda5, terceira5)
        await interaction.showModal(modal9);
    }} 
   } 
   if (!interaction.isModalSubmit()) return;
   if (interaction.customId === 'modal8') {
    const resposta1 = interaction.fields.getTextInputValue('motivo8');
    const resposta2 = interaction.fields.getTextInputValue('idcid8');
    const resposta3 = interaction.fields.getTextInputValue('nomecid8')
  

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    const user = await interaction.client.users.fetch(resposta2);

    const channel = interaction.channel

    const discordTranscripts = require("discord-html-transcripts")

    const topic = interaction.channel.topic

    const attachment = await discordTranscripts.createTranscript(channel, {
      fileName: `${channel.name}.html`
    });

    const ticketID = Math.floor(Math.random() * 100000)

    const data = new Date().toLocaleString()

    setTimeout( () => {
      interaction.channel.delete()
    }, 6000)
    
    const emb_log = new Discord.EmbedBuilder()
    .setColor("Random")
    .setDescription(`**Ticket de:** \`<@${resposta2}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta3}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })
    
    const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`❗ Relatar Bugs\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta1}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })


    user.send({ embeds: [user_log], files: [attachment] })
      await interaction.guild.channels.cache.get(config.canal_logs).send({ 
        embeds: [emb_log],
        files: [attachment],
    })
  } else if (interaction.customId === 'modal9') {
    const resposta10 = interaction.fields.getTextInputValue('motivo9');
    const resposta11 = interaction.fields.getTextInputValue('idcid9');
    const resposta13 = interaction.fields.getTextInputValue('nomecid9');

    interaction.reply({
      ephemeral: false,
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription('✅ | Sucesso, ticket fechando em \`5s\`')
        .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        .setTimestamp()
      ]
    })
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`4s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 1000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`3s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 2000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`2s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 3000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Loading:964975104163446856> | Sucesso, ticket fechando em \`1s\`')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 4000)
    setTimeout( () => {
      interaction.editReply({
        ephemeral: false,
        embeds: [
          new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription('<a:Verify:955208590170415155> | Sucesso, ticket fechado!')
          .setFooter({ text: `Vegas City | 🔖 Tickets System` })
        ]
      })
    }, 5000)

    

  const user = await interaction.client.users.fetch(resposta11);

  const channel = interaction.channel

  const discordTranscripts = require("discord-html-transcripts")

  const topic = interaction.channel.topic

 const attachment = await discordTranscripts.createTranscript(channel, {
  fileName: `${channel.name}.html`
 });

const ticketID = Math.floor(Math.random() * 100000)

const data = new Date().toLocaleString()

setTimeout( () => {
  interaction.channel.delete()
}, 6000)

const emb_log = new Discord.EmbedBuilder()
.setColor("Random")
.setDescription(`**Ticket de:** \`<@${resposta11}>\`\n\n**Ticket ID:** \`${ticketID}\`\n\n**Data e hora:** \`${data}\`\n\n**Nome e id-game:** \`${resposta13}\`\n\n**Deletado pelo staff:** \`${interaction.user.username}\`\n\n**Motivo do fechamento:**\`\`\`${resposta10}\`\`\``)
.setFooter({ text: `Vegas City | 🔖 Tickets System` })

  const user_log = new Discord.EmbedBuilder()
    .setTitle('✅ | Ticket Finalizado!')
    .setColor("Random")
    .setDescription(`**Ticket ID:** \`${ticketID}\`\n\n**Categoria:** \`❗ Relatar Bugs\`\n\n**Quem fechou:** \`${interaction.user.username}\`\n\n**Data e Hora:** \`${data}\`\n\n**Motivo do fechamento:** \`\`\`${resposta10}\`\`\``)
    .setFooter({ text: `Vegas City | 🔖 Tickets System` })

  user.send({ embeds: [user_log] })
await interaction.guild.channels.cache.get(config.canal_logs).send({ 
  embeds: [emb_log],
  files: [attachment],
 })

  }
})


client.login(config.token)
// made in Tapioka
// made in Tapioka