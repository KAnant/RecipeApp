﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RecipeApp.Data;

namespace RecipeApp.Migrations
{
    [DbContext(typeof(RecipeAppDbContext))]
    [Migration("20180918113248_first")]
    partial class first
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RecipeApp.Models.Recipes", b =>
                {
                    b.Property<string>("RecipeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Ingredients");

                    b.Property<string>("RecipeName");

                    b.Property<string>("Steps");

                    b.HasKey("RecipeId");

                    b.ToTable("Recipes");
                });
#pragma warning restore 612, 618
        }
    }
}